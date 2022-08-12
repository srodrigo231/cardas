import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Card from './routes/card'
import Cards from './routes/cards'

import {
	// Link,
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App/>}>
					<Route path="cards" element={<Cards />}>
						<Route
							index
							element={
									<p>Select an card</p>
							} />
						<Route path=":cardId" element={<Card />} />
					</Route>
				</Route>
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
