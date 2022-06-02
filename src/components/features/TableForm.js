import { Form, Row, Col, Button,  } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getAllStatuses } from '../../redux/tablesStatusRedux';

const TableForm = ({ action, actionText, ...props}) => {

  const statuses = useSelector(getAllStatuses);

  const [status, setStatus] = useState(props.status || '')
  

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    action({status})
  }

  return (
    <Row>
      <h1 className="my-5">Table 1</h1>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group>
          <Form.Label><b>Status: </b></Form.Label>
          <Form.Control {...register("category", { required: true})}
              as="select"
              placeholder="Please select category"
              value={status ? status : "1"}
              onChange={e => setStatus(e.target.value)}>
                <option disabled value="1">Select status...</option>
               {statuses.map((status, index) => <option key={index} value={status}>{status}</option> )}   
            </Form.Control> 
            {/* {statusError && <small className="d-block form-text text-danger mt-2">Please choose category</small>}       */}

        </Form.Group>
      </Form>
    </Row>
  )
}

export default TableForm