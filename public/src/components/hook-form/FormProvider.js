import PropTypes from 'prop-types';
// form
import { FormProvider as Form } from 'react-hook-form';

// ----------------------------------------------------------------------

const FormProvider=({children,onsubmit,methods})=>{
    return(
        <Form 
        sx={{color:'white'}}
        
        {...methods}>
            <form onSubmit={onsubmit}>{children}</form>

        </Form>
    )
}

export default FormProvider