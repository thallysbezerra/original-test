import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Acessorios from './Acessorios/Acessorios';
import AMarca from './AMarca/AMarca';
import Bolsas from './Bolsas/Bolsas';
import Contato from './Contato/Contato';
import CuidadosComOProduto from './CuidadosComOProduto/CuidadosComOProduto';
import FormasDePagamento from './FormasDePagamento/FormasDePagamento';
import FranquiasEMultimarcas from './FranquiasEMultimarcas/FranquiasEMultimarcas';
import Home from './Home/Home';
import Login from './Login/Login';
import Lojas from './Lojas/Lojas';
import Off from './Off/Off';
import ProconRj from './ProconRj/ProconRj';
import Sapatos from './Sapatos/Sapatos';
import Signup from './Signup/Signup';
import TrabalheComAGente from './TrabalheComAGente/TrabalheComAGente';
import TrocasEDevolucoes from './TrocasEDevolucoes/TrocasEDevolucoes';

export default props => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/a-marca" component={AMarca} />
		<Route path="/acessorios" component={Acessorios} />
		<Route path="/bolsas" component={Bolsas} />
		<Route path="/contato" component={Contato} />
		<Route path="/cuidados-com-o-produto" component={CuidadosComOProduto} />
		<Route path="/formas-de-pagamento" component={FormasDePagamento} />
		<Route
			path="/franquias-e-multimarcas"
			component={FranquiasEMultimarcas}
		/>
		<Route path="/login" component={Login} />
		<Route path="/lojas" component={Lojas} />
		<Route path="/off" component={Off} />
		<Route path="/procon-rj" component={ProconRj} />
		<Route path="/sapatos" component={Sapatos} />
		<Route path="/signup" component={Signup} />
		<Route path="/trabalhe-com-a-gente" component={TrabalheComAGente} />
		<Route path="/trocas-e-devolucoes" component={TrocasEDevolucoes} />
		<Redirect from="*" to="/" />
	</Switch>
);
