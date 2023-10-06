import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { Header } from '../../components/Header'
import ProductList from '../../components/ProductList'
import { Prato } from '../Home'
import { Restaurante } from '../Home'
import Modal from '../../components/Modal/index'

const LaDolce = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [prato, setPrato] = useState<Prato[]>([])
  const [modal, setModal] = useState<{ isVisible: boolean; prato?: Prato }>({
    isVisible: false
  })

  const openModal = (prato: Prato) => {
    setModal({ isVisible: true, prato })
  }

  const closeModal = () => {
    setModal({ isVisible: false })
  }

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setPrato(data.cardapio || []))
  }, [id])

  return (
    <>
      <Header />
      {restaurante && <Banner restaurante={restaurante} />}
      <ProductList products={prato} openModal={openModal} />
      {modal.isVisible && modal.prato && (
        <Modal closeModal={closeModal} prato={modal.prato} />
      )}

      <Footer />
    </>
  )
}

export default LaDolce
