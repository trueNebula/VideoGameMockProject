import React, {useEffect, useRef, useState} from 'react';
import Button from "@mui/material/Button"
import Container from "@mui/material/Container";
import { DestinationFormProps } from "../../models/destination";
import {FormControl, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";

// consistent storage
const VideoGameForm: React.FC<DestinationFormProps> = ({
                                                    destinationID,
                                                    destinationName,
                                                    geolocation,
                                                    description,
                                                    imageLink,
                                                    isWishlist,
                                                    updateCallback,
                                                    createCallback
                                                }: DestinationFormProps): React.ReactElement => {

    const [selection, setSelection] = useState<{
        destinationID: number | null;
        destinationName: string;
        geolocation: string;
        imageLink: string; description: string;
        isWishlist: boolean
    }>({
        destinationID: null,
        destinationName: "",
        geolocation: "",
        imageLink: "",
        description: "",
        isWishlist: false
    })

    useEffect(() => setSelection({
        destinationID: destinationID,
        destinationName: destinationName,
        geolocation: geolocation,
        imageLink: imageLink,
        description: description,
        isWishlist: isWishlist
    }), [destinationID, destinationName, geolocation, description, imageLink, isWishlist])

    const handleInputSubmit = () => {
        console.log(selection)
        selection.destinationID === null ? createCallback(selection) : updateCallback(selection)
    }

    const clearSelection = () => {
        console.log(selection)
        setSelection({
            destinationID: null,
            destinationName: "",
            geolocation: "",
            description: "",
            imageLink: "",
            isWishlist: false
        })
    }

    const form = useRef(null)


    return (
        <FormControl className='my-3' ref={form}>
            <Container sx={{'padding':'5px'}}>
                <Grid container spacing={{xs: 2, md: 2}} columns={{xs: 4, sm: 8, md: 12}}>
                    <Grid item xs={6}>
                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="ID" value={selection.destinationID ? selection.destinationID : ""} type="text" placeholder=""
                                          disabled InputProps={{readOnly: true}}/>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>

                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="Name" value={selection.destinationName ? selection.destinationName : ""}
                                          onChange={(e) => {
                                              setSelection({...selection!, destinationName: e.target.value}
                                              )
                                          }}
                                          type="text" placeholder=""/>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>

                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="Geolocation" value={selection ? selection!.geolocation : ""}
                                          onChange={e => setSelection({...selection!, geolocation: e.target.value})}
                                          type="text" placeholder=""/>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="Image Link" value={selection ? selection!.imageLink : ""}
                                      onChange={e => setSelection({
                                          ...selection!,
                                          imageLink: e.target.value
                                      })} type="text" placeholder=""/>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                        <Container sx={{'display':'inline-flex', 'flex-direction':'column'}}>
                            <TextField label="Description" value={selection ? selection!.description : ""}
                                          onChange={e => setSelection({
                                              ...selection!,
                                              description: e.target.value
                                          })} type="text" placeholder=""/>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                        <Container sx={{'display': 'inline-flex', 'justify-content' : 'inline-flex', 'margin-top':'5px','gap': '20px', 'padding':'0px'}} >
                            <Button  variant={"contained"} color={"success"} sx={{'width':'240px', 'height':'50px'}}
                                onClick={handleInputSubmit}>Create/Update</Button>
                            <Button variant={"contained"} color={"secondary"} onClick={clearSelection} sx={{'width':'235px', 'height':'50px'}}>Clear
                                Selection</Button>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </FormControl>
    )
}

export default VideoGameForm;
