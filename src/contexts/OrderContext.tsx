import { createContext, FC, ReactNode, useCallback, useState } from 'react'
import {
  FormState,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

export enum PaymentType {
  BANK_CARD,
  CREDIT_CARD,
  MONEY,
}

const delveryAdressFormValidationShema = zod.object({
  cep: zod
    .string()
    .min(8, 'Informe um CEP válido!')
    .max(8, 'Informe um CEP válido!'),
  street: zod.string().min(1, 'O campo é obrigatório!'),
  number: zod
    .number({ message: 'O campo é obrigatório!' })
    .nonnegative()
    .min(1, 'O campo é obrigatório!'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'O campo é obrigatório!'),
  city: zod.string().min(1, 'O campo é obrigatório!'),
  uf: zod.string().min(2, 'O campo é obrigatório!').max(2),
})

const defaultValuesOfDeliveryAdress = {
  cep: undefined,
  street: undefined,
  number: null,
  complement: undefined,
  district: undefined,
  city: undefined,
  uf: undefined,
}
export interface DeliveryAddressProps {
  cep?: string
  street?: string
  number: number | null
  complement?: string
  district?: string
  city?: string
  uf?: string
}

interface OrderContextProps {
  orders: Order.default[]
  paymentType: PaymentType | null
  deliveryAddress: DeliveryAddressProps
  formState: FormState<DeliveryAddressProps>
  addOrder: (order: Order.default) => void
  removeOrder: (orderId: string) => void
  onUpdateOrderQuantity: (orderId: string, quantity: number) => void
  clearAllOrder: () => void
  register: UseFormRegister<DeliveryAddressProps>
  handleSubmit: UseFormHandleSubmit<DeliveryAddressProps, undefined>
  onChangePaymentType: (type: PaymentType) => void
  reset: UseFormReset<DeliveryAddressProps>
  onUpdateDeliveryAddress: (newDeliveryAdress: DeliveryAddressProps) => void
}

export const OrderContext = createContext({} as OrderContextProps)

interface OrderProviderProps {
  children: ReactNode
}

export const OrderProvider: FC<OrderProviderProps> = ({ children }) => {
  const { register, handleSubmit, reset, formState } =
    useForm<DeliveryAddressProps>({
      defaultValues: defaultValuesOfDeliveryAdress,
      resolver: zodResolver(delveryAdressFormValidationShema),
    })
  const [orders, setOrders] = useState<Order.default[]>([])
  const [paymentType, setPaymentType] = useState<PaymentType | null>(null)
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddressProps>(
    defaultValuesOfDeliveryAdress,
  )

  const addOrder = (order: Order.default) => {
    if (orders.find(({ id }) => order.id === id))
      setOrders((state) =>
        state.map((i) =>
          i.id === order.id
            ? { ...i, quantity: i.quantity + order.quantity }
            : i,
        ),
      )
    else setOrders((state) => state.concat(order))
  }

  const removeOrder = (orderId: string) => {
    setOrders((state) => state.filter(({ id }) => id !== orderId))
  }

  const clearAllOrder = () => {
    setOrders([])
  }

  const onUpdateOrderQuantity = useCallback(
    (orderId: string, quantity: number) => {
      const ordersUpdated = orders.map((order) => {
        if (order.id === orderId) return { ...order, quantity }

        return order
      })

      setOrders(ordersUpdated)
    },
    [orders],
  )

  const onChangePaymentType = (type: PaymentType) => {
    setPaymentType(type)
  }

  const onUpdateDeliveryAddress = (newDeliveryAdress: DeliveryAddressProps) => {
    setDeliveryAddress(newDeliveryAdress)
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        paymentType,
        deliveryAddress,
        formState,
        addOrder,
        removeOrder,
        onUpdateOrderQuantity,
        clearAllOrder,
        register,
        reset,
        handleSubmit,
        onChangePaymentType,
        onUpdateDeliveryAddress,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
