import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Container, Form, FormGroup, Label, Input } from "reactstrap";
import { AuthState, AppState, ProfileState } from "../../interfaces/app.i";

interface AccountProps {
  profile: ProfileState;
}

/**
 * TODO
 * [ ] CHANGE TO CLASS COMPONENT
 */

const Account: React.FC<AccountProps> = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state: AppState): AuthState => state.auth);
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState(profile.firstName);
  return (
    <Container>
      <h3>Profile</h3>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            First Name:
          </Label>
          <Col sm={4}>
            <Input
              value={firstName}
              onChange={(e): void => setFirstName(e.target.value)}
              disabled={!editMode}
              placeholder={profile.firstName}
            />
          </Col>
          <Label for="exampleEmail" sm={2}>
            Last Name:
          </Label>
          <Col sm={4}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              disabled={!editMode}
              placeholder={profile.email || "---"}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              disabled={!editMode}
              placeholder={profile.email || "---"}
            />
          </Col>
        </FormGroup>
      </Form>
      <Button
        outline
        color={editMode ? "primary" : "danger"}
        onClick={
          !editMode ? (): void => setEditMode(true) : (): void => setEditMode(false)
        }
      >
        {editMode ? "Save" : "Edit"}
      </Button>
      {profile.firstName}
    </Container>
  );
};

export default Account;
