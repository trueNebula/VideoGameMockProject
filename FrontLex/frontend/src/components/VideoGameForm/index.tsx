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
                                                    id,
                                                    name,
                                                    releaseYear,
                                                    company,
                                                    rating,
                                                    sales,
                                                    platform,
                                                }: GameFormProps): React.ReactElement => {
    const dispatch = useDispatch();

    const [selection, setSelection] = useState<{
        id: number | null;
        name: string;
        company: string;
        rating: number | null;
        releaseYear: number | null;
        platform: string; sales: number | null;
    }>({
        id: null,
        name: "",
        company: "",
        rating: null,
        releaseYear: null,
        platform: "",
        sales: null
    })

    useEffect(() => setSelection({
        id: id,
        name: name,
        sales: sales,
        releaseYear: releaseYear,
        company: company,
        rating: rating,
        platform: platform
    }), [id, name, releaseYear, company, rating, sales, platform])

    const onInputSubmit = () => {
        console.log(selection)
        selection.id === null ? dispatch(createGame(selection)) : dispatch(updateGame(selection))
    }

    const clearSelection = () => {
        console.log(selection)
        setSelection({id: null, name: "", company: "", rating: null, releaseYear: null, platform: "", sales: null})
    }

    const form = useRef(null)


    return (
        <Form className='my-3' ref={form}>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formId">
                            <Form.Label>Id:</Form.Label>
                            <Form.Control value={selection.id ? selection.id : ""} type="text" placeholder=""
                                          disabled readOnly/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control value={selection.name ? selection.name : ""}
                                          onChange={(e) => {
                                              setSelection({...selection!, name: e.target.value}
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
