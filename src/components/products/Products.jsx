import React, { useEffect, useState } from 'react'
import './Products.scss'
import axios from 'axios'
import { MdOutlineShoppingBag } from "react-icons/md";
import Model from '../model/Model';
import { useSearchParams } from 'react-router-dom';
import CardLoading from '../cardLoading/CardLoading';

const API__URL = 'https://dummyjson.com'
const Products = () => {
    const [data, setData] = useState(null)
    const [detail, setDetail] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)

    console.log(searchParams.get('detail'));

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${API__URL}/products`, { params: { limit: 6 } })
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        let id = searchParams.get('detail')
        if (id) {
            axios
                .get(`${API__URL}/products/${id}`, {})
                .then(res => setDetail(res.data))
                .finally(() => setDetailLoading(false))
        }
    }, [searchParams])

    const closeDetail = () => {
        setDetail(null)
        setSearchParams({})
    }

    const card = data?.map(product =>
        <div key={product.id} className="card">
            <img src={product.images[0]} alt="" />
            <div className="text">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <span>
                    <h2>{product.price} руб</h2>
                    <button onClick={() => setSearchParams({ detail: product.id })}> <MdOutlineShoppingBag /> В корзину</button>
                </span>
            </div>
        </div>
    )

    return (
        <>
            <div className="products">
                <div className="container">
                    <div className="products__title">
                        <h2>Готовые наборы</h2>
                        <span className='btns'>
                            <button>Свадьба</button>
                            <button>Девичник</button>
                            <button>День рождения </button>
                            <button>8 марта</button>
                            <button>23 февраля</button>
                            <button>Новый год</button>
                            <button>День учителя</button>
                            <button>День тренера</button>
                            <button>1 сентября</button>
                            <button>Пасха</button>
                            <button>Без печати</button>
                        </span>
                    </div>
                    <div className="cards">
                        {loading ? 
                         <CardLoading/>
                         :
                          card}
                    </div>
                </div>
                <div>
                    <button className='more'>Показать ещё</button>
                </div>
            </div>
            {
                detail ?
                    <Model close={closeDetail}>
                        <div className='detail'>
                                <>
                                    <img height={500} width={400} src={detail?.images[0]} alt="" />
                                    <div className="text">
                                        <h2>{detail.title}</h2>
                                        <p>{detail.description}</p>
                                        <span>
                                            <h3>{detail.price} руб</h3>
                                            <button onClick={() => closeDetail()}>Buy</button>
                                        </span>
                                    </div>
                                </>
                        </div>
                    </Model>
                    :
                    <></>
            }
        </>
    )
}

export default Products
