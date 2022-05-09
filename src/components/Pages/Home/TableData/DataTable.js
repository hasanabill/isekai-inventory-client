import React from 'react';
import { Table } from 'react-bootstrap';

const DataTable = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center pb-3'>Data Table</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Status</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Md Shakib Khan</td>
                        <td>khansakib@gmail.com</td>
                        <td>watch</td>
                        <td>deliverd</td>
                        <td><button>update</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Shakib Al Hassan</td>
                        <td>hhasanalsakkib@gmail.com</td>
                        <td>watch</td>
                        <td>deliverd</td>
                        <td><button>update</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Leonel Messi</td>
                        <td>leonelmessi07@gmail.com</td>
                        <td>watch</td>
                        <td>pending</td>
                        <td><button>update</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Tamim Iqbal</td>
                        <td>tamimiqbal100@gmail.com</td>
                        <td>watch</td>
                        <td>pending</td>
                        <td><button>update</button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Doctor Steven Strange</td>
                        <td>strange616@gmail.com</td>
                        <td>Broke Watch</td>
                        <td>pending</td>
                        <td><button>update</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default DataTable;