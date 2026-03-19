import { useMutation } from "@tanstack/react-query";
import { useKakaoPostcodePopup } from "react-daum-postcode";
import { toast } from "react-toastify";
import { useForm } from "../../../hooks/useForm";
import { useCart } from "../../../hooks/useCart";
import { createOrderAPI } from "../../../apis/endpoints/order";
import { useNavigate } from "react-router-dom";

export const usePayment = () => {
    const navigate = useNavigate();
    const { cartItems, totalQuantity, totalPrice, clearCart } = useCart();
    const { formVal, setFormVal, handleChange } = useForm({
        zonecode: "",
        address: "",
        addressDetail: "",
    });
    const open = useKakaoPostcodePopup();

    const estimatedDate = new Date();
    estimatedDate.setDate(estimatedDate.getDate() + 3);
    const formattedDate = estimatedDate.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    const handleAddressSearch = () => {
        open({
            onComplete: (data) => {
                setFormVal((prev) => ({
                    ...prev,
                    zonecode: data.zonecode,
                    address: data.roadAddress,
                }));
            },
        });
    };

    const { mutate: placeOrder } = useMutation({
        mutationFn: createOrderAPI,
        onSuccess: () => {
            toast.success("주문이 완료되었습니다");
            clearCart();
            navigate("/Mypage");
        },
        onError: () => {
            toast.error("주문 중 오류가 발생했습니다");
        },
    });

    const handlePayment = () => {
        if (!formVal.address) {
            toast.error("주소를 입력해주세요");
            return;
        }

        const fullAddress =
            `[${formVal.zonecode}] ${formVal.address} ${formVal.addressDetail}`.trim();

        placeOrder({
            totalPrice,
            address: fullAddress,
            orderItems: cartItems.map((item) => ({
                productId: item.productId,
                colorId: item.color.id,
                sizeId: item.size.id,
                quantity: item.quantity,
                price: item.price,
            })),
        });
    };

    return {
        formVal,
        handleChange,
        handleAddressSearch,
        handlePayment,
        cartItems,
        totalQuantity,
        totalPrice,
        formattedDate,
    };
};
