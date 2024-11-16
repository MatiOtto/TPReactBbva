import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function tablaPolizas() {
    const polizas = [
        { id: 1, nombreCliente: "Pedro Sanchez", tipo: 2, precio: 2500, fecha: "22/10/2024" },
        { id: 2, nombreCliente: "Simon Cutrera", tipo: 2, precio: 2500, fecha: "13/01/2022" },
        { id: 3, nombreCliente: "Samuel Calletano", tipo: 3, precio: 3500, fecha: "15/12/2021" },
        { id: 4, nombreCliente: "Florencia", tipo: 2, precio: 2500, fecha: "03/07/2027" },
        { id: 5, nombreCliente: "Lolo ", tipo: 1, precio: 1100, fecha: "28/04/2028" },
    ]


    const [cargando, setCargando] = useState(false);



    if (cargando) {
        return <Typography>Cargando</Typography>;
    }

    return (
        <div class="divPolizas">

            <Typography variant="h4" sx={{ textAlign: "center", marginTop: "30px", }}>Gestor Seguros</Typography>
            <Table
                sx={{
                    width: "80%",
                    margin: "0 auto",
                    paddingBottom: "100px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#0000",
                    mt: 1.2,
                    mb: 5
                }}
            >
                <TableHead
                    sx={{
                        backgroundColor: "#08426f",
                    }}
                >
                    <TableRow>
                        <TableCell sx={{ color: "white" }}>Cliente</TableCell>
                        <TableCell sx={{ color: "white" }}>Tipo Seguro</TableCell>
                        <TableCell sx={{ color: "white" }}>Precios</TableCell>
                        <TableCell sx={{ color: "white" }}>Fecha de Vencimiento</TableCell>
                        <TableCell sx={{ color: "white" }}>
                            
                                Acciones
                            
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {polizas.map((poliza) => (
                        <TableRow key={poliza.id}>
                            <TableCell>{poliza.nombreCliente}</TableCell>
                            <TableCell>{poliza.tipo}</TableCell>
                            <TableCell>{poliza.precio}</TableCell>
                            <TableCell>{poliza.fecha}</TableCell>
                            <TableCell><Button variant='contained'>Ver</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}