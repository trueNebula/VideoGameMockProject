import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import CustomNavbar from '../components/NavBar';
import Destinations from '../pages/Destinations';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux"
import DestinationCard from '../components/DestinationCard';

// const mockStore = configureStore([]);
describe('Testing Components', () => {
    // let store;

    // beforeEach(() => {
    //     store = mockStore({
    //         userLogin: { username: "user1", password: 'pass1', permissions: 'user' },
    //     });
    // });
    it('renders the username of the logged in user properly in the Navbar', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/"
                        element={<CustomNavbar username='user1' />} />
                </Routes>
            </BrowserRouter>,
        );

        expect(() => {
            screen.getByText("Logged in as: user1")
        }).not.toThrow();
    });

    it('renders the destination card name', () => {
        let destinationID = 1
        let destinationName = 'Bali'
        let geolocation = 'Indonesia'
        let imageLink = "https://travel.usnews.com/dims4/USNEWS/8468e04/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F445_280_1296099441_a936e2155c_b_445x280_QbEpnh1.jpg"
        let description = "Summer is a great time to visit Bali because it falls within the Indonesian destination's dry season. Plus, daytime temperatures consistently stay below 90 degrees."
        let isWishlist = false
        let permissions = 'user'
        let startDate, endDate
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/"
                        element={<DestinationCard key={1}
                            permissions={permissions}
                            geolocation={geolocation}
                            destinationName={destinationName}
                            destinationID={destinationID}
                            startDate={startDate}
                            endDate={endDate}
                            onClickCallback={({
                                destinationID,
                                destinationName,
                                geolocation,
                                description,
                                imageLink,
                                isWishlist
                            }) => handleOnClick({
                                destinationID: destinationID,
                                destinationName: destinationName,
                                geolocation,
                                imageLink,
                                description,
                                isWishlist,
                                startDate,
                                endDate
                            })}
                            deleteDestinationCallback={(destinationID) => handleDeleteDestination(destinationID)}
                            updateCallback={(destination) => {
                                handleUpdate(destination)
                            }}
                            wishlistCallback={({
                                destinationID,
                                destinationName,
                                geolocation,
                                description,
                                imageLink, isWishlist
                            }) => handleWishlistUpdate({
                                destinationID,
                                destinationName,
                                geolocation,
                                description,
                                imageLink, isWishlist,
                                startDate, endDate
                            })}
                            imageLink={imageLink}
                            description={description}
                            isWishlist={isWishlist}
                        />} />
                </Routes>
            </BrowserRouter>,
        );

        expect(() => {
            screen.getByText("Bali")
        }).not.toThrow();
    });

    it('renders the wishlist heart red if the destination is wishlisted', () => {
        let destinationID = 1
        let destinationName = 'Bali'
        let geolocation = 'Indonesia'
        let imageLink = "https://travel.usnews.com/dims4/USNEWS/8468e04/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2F445_280_1296099441_a936e2155c_b_445x280_QbEpnh1.jpg"
        let description = "Summer is a great time to visit Bali because it falls within the Indonesian destination's dry season. Plus, daytime temperatures consistently stay below 90 degrees."
        let isWishlist = true
        let permissions = 'user'
        let startDate, endDate
        const { container } = render(
            <BrowserRouter>
                <Routes>
                    <Route path="/"
                        element={<DestinationCard key={1}
                            permissions={permissions}
                            geolocation={geolocation}
                            destinationName={destinationName}
                            destinationID={destinationID}
                            startDate={startDate}
                            endDate={endDate}
                            onClickCallback={({
                                destinationID,
                                destinationName,
                                geolocation,
                                description,
                                imageLink,
                                isWishlist
                            }) => handleOnClick({
                                destinationID: destinationID,
                                destinationName: destinationName,
                                geolocation,
                                imageLink,
                                description,
                                isWishlist,
                                startDate,
                                endDate
                            })}
                            deleteDestinationCallback={(destinationID) => handleDeleteDestination(destinationID)}
                            updateCallback={(destination) => {
                                handleUpdate(destination)
                            }}
                            wishlistCallback={({
                                destinationID,
                                destinationName,
                                geolocation,
                                description,
                                imageLink, isWishlist
                            }) => handleWishlistUpdate({
                                destinationID,
                                destinationName,
                                geolocation,
                                description,
                                imageLink, isWishlist,
                                startDate, endDate
                            })}
                            imageLink={imageLink}
                            description={description}
                            isWishlist={isWishlist}
                        />} />
                </Routes>
            </BrowserRouter>,
        );
        const svgEl = container.getElementsByTagName("svg")[0];
        const style = window.getComputedStyle(svgEl)

        expect(style.fill).toBe('red');
    });
});