import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import {GameTableRowProps} from "../../models/videogame";


const VideoGameTableRow: React.FC<GameTableRowProps> = ({
                                                            id,
                                                            name,
                                                            releaseYear,
                                                            company,
                                                            rating,
                                                            sales,
                                                            platform,
                                                            handleOnClickCallback,
                                                            deleteGameCallback,
                                                            isFiltered,
                                                            noDelete
                                                        }: GameTableRowProps): React.ReactElement => {


    const handleDeleteGameCallback = () => {
        id && deleteGameCallback(id);
    }
    const handleClick = (e: any) => {
        e.preventDefault()
        handleOnClickCallback({id, name, releaseYear, company, rating, sales, platform})
    }

    return (
        <tr key={id} onClick={handleClick}>
            {isFiltered ? <td>{releaseYear}</td> : null}
            <td>{name}</td>
            <td>{releaseYear}</td>
            <td>{company}</td>
            <td>{rating}</td>
            <td>{sales}</td>
            <td>{platform}</td>
            {!noDelete ?
                <td><Button className="p-2 my-2 w-100 btn-danger" onClick={()=>handleDeleteGameCallback()}>Delete</Button></td> : null}
        </tr>
    );
}

export default VideoGameTableRow;
