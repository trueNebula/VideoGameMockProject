import React from 'react';
import { Button } from 'react-bootstrap';
import { DestinationCardProps } from "../../models/destination";


const DestinationTableRow: React.FC<DestinationCardProps> = ({
                                                            destinationID,
                                                            destinationName,
                                                            geolocation,
                                                            description,
                                                            imageLink,
                                                            endDate,
                                                            startDate,
                                                            onClickCallback,
                                                            deleteDestinationCallback,
                                                            isFiltered,
                                                            noDelete,
                                                            isWishlist
                                                        }: DestinationCardProps): React.ReactElement => {


    const handleDeleteGameCallback = () => {
        destinationID && deleteDestinationCallback(destinationID);
    }
    const handleClick = (e: any) => {
        e.preventDefault()
        onClickCallback({
            destinationID: destinationID,
            destinationName: destinationName,
            geolocation,
            imageLink,
            description,
            isWishlist,
            startDate,
            endDate
        })
    }

    return (
        <tr key={destinationID} onClick={handleClick}>
            <td>{destinationName}</td>
            <td>{geolocation}</td>
            {!noDelete ?
                <td><Button className="p-2 my-2 w-100 btn-danger"
                            onClick={() => handleDeleteGameCallback()}>Delete</Button></td> : null}
        </tr>
    );
}

export default DestinationTableRow;
