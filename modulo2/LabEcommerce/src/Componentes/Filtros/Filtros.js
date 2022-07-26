import React from "react";
import { Filtro, GrupoDeFiltros } from "./estiloDoFiltro";


class Filtros extends React.Component {
  render() {
    return <GrupoDeFiltros>
        <h2>Filtros</h2>
        <Filtro>
            Filtro Mínimo:
            <input type={"number"}
            value={this.props.minimo}
            onChange = {this.props.onChangeMinimo}
            />
        </Filtro>

        <Filtro>
            Filtro Máximo:
            <input type={"number"}
            value={this.props.maximo}
            onChange = {this.props.onChangeMaximo}
            />
        </Filtro>

        <Filtro>
            Busca por nome:
            <input type={"text"}
            value={this.props.buscaPorNome}
            onChange = {this.props.onChangeBuscaPorNome}
            />
        </Filtro>
    </GrupoDeFiltros>;
  }
}

export default Filtros;
