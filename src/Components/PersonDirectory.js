import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';

const PersonDirectory = () => {

    const [searchTermTeacher, setSearchTermTeacher] = useState("");
    const [searchResultsTeacher, setSearchResultsTeacher] = useState([]);
    const [searchTermStudent, setSearchTermStudent] = useState("");
    const [searchResultsStudent, setSearchResultsStudent] = useState([]);

    const handleChangeTeacher = e => {
        setSearchTermTeacher(e.target.value);
    };

    const handleChangeStudent = e => {
        setSearchTermStudent(e.target.value);
    };

    useEffect(() => {
        axios.get("http://localhost:5000/teachers")
        .then(function(resp) {
            const results = resp.data.filter(person =>
                person.Name.toLowerCase().includes(searchTermTeacher)
            );
            setSearchResultsTeacher(results);
        });
    }, [searchTermTeacher]);

    useEffect(() => {
        axios.get("http://localhost:5000/students")
        .then(function(resp) {
            const results = resp.data.filter(person =>
                person.name.toLowerCase().includes(searchTermStudent)
            );
            setSearchResultsStudent(results);
        });
    }, [searchTermStudent]);

    return (
        <div>
            <h2>School Directory</h2>
            <input
                type="text"
                placeholder="teacher"
                value={searchTermTeacher}
                onChange={handleChangeTeacher}
            /> <br /> <br />

            <TableContainer>
                <Table aria-label="simple table" size="small" style={{borderTop: '2px solid black', borderBottom: '2px solid black', borderLeft: '2px solid black', borderRight: '2px solid black', width:600}} align="center">
                    <TableHead style={{backgroundColor:"white"}}>
                    <TableRow>
                        <TableCell align="center" style={{fontFamily: "Arial", fontSize: 18}}><b>Name</b></TableCell>
                        <TableCell align="center" style={{fontFamily: "Arial", fontSize: 18}}><b>Email</b></TableCell>
                        <TableCell align="center" style={{fontFamily: "Arial", fontSize: 18}}><b>Class</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody style={{backgroundColor:"white"}}>
                        {searchResultsTeacher.map((a) =>   
                        <TableRow>
                            <TableCell align="center">{a.Name}</TableCell>
                            <TableCell align="center">{a.Email}</TableCell>
                            <TableCell align="center">{a.Class}</TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <input
                type="text"
                placeholder="student"
                value={searchTermStudent}
                onChange={handleChangeStudent}
            /> <br /> <br />

            <TableContainer>
                <Table aria-label="simple table" size="small" style={{borderTop: '2px solid black', borderBottom: '2px solid black', borderLeft: '2px solid black', borderRight: '2px solid black', width:600}} align="center">
                    <TableHead style={{backgroundColor:"white"}}>
                    <TableRow>
                        <TableCell align="center" style={{fontFamily: "Arial", fontSize: 18}}><b>Name</b></TableCell>
                        <TableCell align="center" style={{fontFamily: "Arial", fontSize: 18}}><b>Year</b></TableCell>
                        <TableCell align="center" style={{fontFamily: "Arial", fontSize: 18}}><b>Birthday</b></TableCell>
                        <TableCell align="center" style={{fontFamily: "Arial", fontSize: 18}}><b>Grade</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody style={{backgroundColor:"white"}}>
                        {searchResultsStudent.map((a) =>   
                        <TableRow>
                            <TableCell align="center">{a.name}</TableCell>
                            <TableCell align="center">{a.grade_level}</TableCell>
                            <TableCell align="center">{a.DOB}</TableCell>
                            <TableCell align="center">{a.class_grade}</TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default PersonDirectory;

