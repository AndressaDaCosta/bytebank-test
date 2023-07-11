import React from 'react'
import estilos from './Saldo.module.css'
import iconeOlho from './icone-olho.svg'

export default function Saldo({ saldo }) {
	return (
		<div className={estilos.container}>
			<div className={estilos.wrapper}>
				<h2 className={estilos.saldo}>Saldo</h2>

				<img
					src={iconeOlho}
					alt=""
				/>
			</div>
			<div className={estilos.divisor} />
			<p className={estilos.conta}>Conta corrente</p>
			<p className={estilos.valor}>{`R$ ${saldo}`}</p>
		</div>
	)
}
