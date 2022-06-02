import { Form, Row, Col, Button,  } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getAllStatuses } from '../../redux/tablesStatusRedux';

const TableForm = ({ action, actionText, ...props}) => {

  const statuses = useSelector(getAllStatuses);

  const [status, setStatus] = useState(props.status || '');
  const [people, setPeople] = useState(props.people || '');
  const [maxPeople, setMaxPeople] = useState(props.maxPeople || '');
  

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    action({status})
  }

  return (
    <Row>
      <h1 className="my-5">Table 1</h1>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="1"><b>Status: </b></Form.Label>
          <Col sm="10">
            <Form.Control {...register("category", { required: true})}
                as="select"
                placeholder="Please select category"
                value={status ? status : "1"}
                onChange={e => setStatus(e.target.value)}
                className="w-25"
                >
                  <option disabled value="1">Select status...</option>
                {statuses.map((status, index) => <option key={index} value={status}>{status}</option> )}   
              </Form.Control> 
          </Col>
            {/* {statusError && <small className="d-block form-text text-danger mt-2">Please choose category</small>}       */}
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="1"><b>People: </b></Form.Label>
          <Col sm="1"  >
            <Form.Control 
                {...register("people", { required: true})}
                value={people} 
                type="text"                
                onChange={e => setPeople(e.target.value)} 
               style={{width: '5'}}

              />
              {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and has to be at least 3 characters long</small>}
          </Col>
          <Col sm="1">
            <p>/</p>
          </Col>
          <Col sm="1"  >
            <Form.Control 
                {...register("maxPeople", { required: true})}
                value={maxPeople} 
                type="text"                
                onChange={e => setMaxPeople(e.target.value)} 
               style={{width: '5'}}

              />
              {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and has to be at least 3 characters long</small>}
          </Col>
        </Form.Group>
      </Form>
    </Row>
  )
}

export default TableForm