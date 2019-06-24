import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button, ButtonGroup,Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { employeesActions } from './_actions';


var initialdata =[];
  var headerName =[
      {
        dataField: 'name',
        text: 'Employee Name',
      sort: true,
      headerStyle: { backgroundColor: '#007bff' }
      }, {
        dataField: 'age',
        text: 'Age',
        sort: true,
        headerStyle: { backgroundColor: '#007bff' }
      },{
        dataField: 'gender',
        text: 'Gender',
        headerStyle: { backgroundColor: '#007bff' }
      },{
        dataField: 'email',
        text: 'Email',
        headerStyle: { backgroundColor: '#007bff' }
      },{
        dataField: 'phoneNo',
        text: 'Phone No',
        headerStyle: { backgroundColor: '#007bff' }
      }];
      const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: (row, isSelect, rowIndex, e) => {
          var selectId = row['id'];
          document.getElementById('selectedemployeesId').value = selectId;

      }
      };
class Employees extends Component {

	
  constructor(props)
	{
		super(props);
		this.state={showModal:false,showEditModal:false,rolesDatastate:initialdata,groupDatastate:[],
    columns:headerName,
  };
    }

    componentDidMount() {
      let self = this;
      self.props.dispatch(employeesActions.getAll());
      }


  render() {
  let employees = [];
    if(this.props.employees.items){
        employees = this.props.employees.items;
    }
    return (
      <div>
        <div className="row" style={{'marginTop': '8px'}}>
        <div className="col-lg-12">
        <input type="hidden" id = "selectedemployeesId" value="" />
        <BootstrapTable
        striped
        hover
        keyField='id'
        data={ employees }
        columns={ this.state.columns }
		    selectRow={ selectRow }
            pagination={ paginationFactory() }
            rowStyle={ { backgroundColor: '#fff' } } />
		</div>
    </div>
	</div>
    );
  }
}

function mapStateToProps(state) {
  const { employees } = state;
  return {
    employees
  };
}

const connectedEmployees = connect(mapStateToProps)(Employees);
export default connectedEmployees;

