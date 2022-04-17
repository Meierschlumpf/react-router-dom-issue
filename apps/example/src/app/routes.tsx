import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<>
					<Route path='/' element={<HomePage />} />
					<Route path='/home' element={<HomePage />} />
				</>
				<>
					<Route path='/other' element={<div>Other Page</div>} />
				</>
			</Routes>
		</BrowserRouter>
	);
};
