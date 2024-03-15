import PropTypes from "prop-types";
// form
import { FormProvider as Form } from "react-hook-form";

// ----------------------------------------------------------------------

FormProvider.propTypes = {
  children: PropTypes.node,
  methods: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default function FormProvider({ children, onSubmit, methods }) {
  return (
    <Form {...methods}>
      <form
        onSubmit={onSubmit}
        style={{ backgroundColor: "#202020", padding: 2, borderRadius: "0px" }}
      >
        {children}
      </form>
    </Form>
  );
}
