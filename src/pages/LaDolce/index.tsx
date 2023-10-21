import { useState } from 'react'

import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { Header } from '../../components/Header'
import ProductList from '../../components/ProductList'
import Modal from '../../components/Modal/index'

import { useGetRestauranteQuery } from '../../services/api'
import Cart from '../../components/Cart'

const LaDolce = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestauranteQuery(id!)

  const cardapio = restaurante?.cardapio || []

  const [modal, setModal] = useState<{ isVisible: boolean; prato?: Prato }>({
    isVisible: false
  })

  const openModal = (prato: Prato) => {
    setModal({ isVisible: true, prato })
  }

  const closeModal = () => {
    setModal({ isVisible: false })
  }

  return (
    <>
      <Header />
      {restaurante && <Banner restaurante={restaurante} />}
      <ProductList id={id!} products={cardapio} openModal={openModal} />
      {modal.isVisible && modal.prato && (
        <Modal closeModal={closeModal} prato={modal.prato} />
      )}
      <Cart />
      <Footer />
    </>
  )
}

export default LaDolce
