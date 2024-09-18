import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA  from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";



it("should render Restaurantcard component with props data",() =>{
    render(<RestaurantCard  resData={MOCK_DATA}/>);

    const name = screen.getByText("Hotel Sitara Grand - Dhanturi Group of hotels");
    expect(name).toBeInTheDocument();
});