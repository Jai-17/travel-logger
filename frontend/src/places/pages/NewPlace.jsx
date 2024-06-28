import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from '../../shared/util/validators.js'
import "./NewPlace.css";

export default function NewPlacePage() {
  return (
    <form className="place-form">
      <Input
        element="input"
        label="Title"
        type="text"
        validators={[VALIDATOR_REQUIRE]}
        errorText="Please enter a valid title"
      />
    </form>
  );
}
