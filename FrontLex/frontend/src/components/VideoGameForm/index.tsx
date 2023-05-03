import React, {useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {FrontLexStore} from "../../models/store";
import {getGames} from "../../store/videogames/operations";
import Games from "../../pages/Games";
import {Button, Col, Form, Row, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {createGame, updateGame} from "../../store/videogames/actions";
import {GameFormProps, GameTableRowProps} from "../../models/videogame";

const VideoGameForm: React.FC<GameFormProps> = ({
                                                    gameID,
                                                    gameName,
                                                    releaseYear,
                                                    company,
                                                    rating,
                                                    sales,
                                                    platform,
                                                    description,
                                                    imageLink,
                                                    isWishlist
                                                }: GameFormProps): React.ReactElement => {
    const dispatch = useDispatch();

    const [selection, setSelection] = useState<{
        gameID: number | null;
        gameName: string;
        company: string;
        rating: number | null;
        releaseYear: number | null;
        platform: string; sales: number | null;
        imageLink: string; description: string;
        isWishlist: boolean
    }>({
        gameID: null,
        gameName: "",
        company: "",
        rating: null,
        releaseYear: null,
        platform: "",
        sales: null,
        imageLink: "",
        description: "",
        isWishlist: false
    })

    useEffect(() => setSelection({
        gameID: gameID,
        gameName: gameName,
        sales: sales,
        releaseYear: releaseYear,
        company: company,
        rating: rating,
        platform: platform,
        imageLink: imageLink,
        description: description,
        isWishlist: isWishlist
    }), [gameID, gameName, releaseYear, company, rating, sales, platform, description, imageLink, isWishlist])

    const onInputSubmit = () => {
        console.log(selection)
        selection.gameID === null ? dispatch(createGame(selection)) : dispatch(updateGame(selection))
    }

    const clearSelection = () => {
        console.log(selection)
        setSelection({
            gameID: null,
            gameName: "",
            company: "",
            rating: null,
            releaseYear: null,
            platform: "",
            sales: null,
            description: "",
            imageLink: "",
            isWishlist: false
        })
    }

    const form = useRef(null)


    return (
        <Form className='my-3' ref={form}>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formId">
                            <Form.Label>Id:</Form.Label>
                            <Form.Control value={selection.gameID ? selection.gameID : ""} type="text" placeholder=""
                                          disabled readOnly/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control value={selection.gameName ? selection.gameName : ""}
                                          onChange={(e) => {
                                              setSelection({...selection!, gameName: e.target.value}
                                              )
                                          }}
                                          type="text" placeholder=""/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-1" controlId="formReleaseYear">
                            <Form.Label>Release Year:</Form.Label>
                            <Form.Control value={selection.releaseYear ? selection.releaseYear : ""}
                                          onChange={e => {
                                              setSelection({
                                                  ...selection!,
                                                  releaseYear: Number(e.target.value)
                                              })
                                          }
                                          } type="text" placeholder=""/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-1" controlId="formCompany">
                            <Form.Label>Company:</Form.Label>
                            <Form.Control value={selection ? selection!.company : ""}
                                          onChange={e => setSelection({...selection!, company: e.target.value})}
                                          type="text" placeholder=""/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-1" controlId="formRating">
                            <Form.Label>Rating:</Form.Label>
                            <Form.Control value={selection.rating ? selection.rating : ""}
                                          onChange={e => setSelection({
                                              ...selection!,
                                              rating: Number(e.target.value)
                                          })}
                                          type="text" placeholder=""/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-1" controlId="formSales">
                            <Form.Label>Sales:</Form.Label>
                            <Form.Control value={selection.sales ? selection.sales : ""}
                                          onChange={e => setSelection({
                                              ...selection!,
                                              sales: Number(e.target.value)
                                          })}
                                          type="text" placeholder=""/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-1" controlId="formPlatform">
                            <Form.Label>Platform Id:</Form.Label>
                            <Form.Control value={selection ? selection!.platform : ""}
                                          onChange={e => setSelection({
                                              ...selection!,
                                              platform: e.target.value
                                          })} type="text" placeholder=""/>
                        </Form.Group>
                    </Col>

                    <Col><Form.Group className="mb-1" controlId="formImageLink">
                        <Form.Label>Image Link:</Form.Label>
                        <Form.Control value={selection ? selection!.imageLink : ""}
                                      onChange={e => setSelection({
                                          ...selection!,
                                          imageLink: e.target.value
                                      })} type="text" placeholder=""/>
                    </Form.Group></Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-1" controlId="formDescription">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control value={selection ? selection!.description : ""}
                                          onChange={e => setSelection({
                                              ...selection!,
                                              description: e.target.value
                                          })} type="text" placeholder=""/>
                        </Form.Group>
                    </Col>

                    <Col></Col>
                </Row>

                <Row>
                    <Col>
                        <Button className="p-2 my-2 w-100 btn-danger" onClick={() => clearSelection()}>Clear
                            Selection</Button>
                    </Col>

                    <Col>
                        <Button className="p-2 m-2 w-100"
                                onClick={() => onInputSubmit()}>Create/Update</Button>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </Form>
    )
}

export default VideoGameForm;
