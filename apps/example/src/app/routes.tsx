import { BrowserRouter, Route, Routes } from "@template/ui/router";
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
