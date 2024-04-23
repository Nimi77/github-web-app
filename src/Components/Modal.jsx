/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  RadioGroup,
  Checkbox
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const CreateModal = ({ isOpen, onClose }) => {
  const [newRepoName, setNewRepoName] = useState("");
  const [createdRepo, setCreatedRepo] = useState(null);
  const [value, setValue] = React.useState("public");

  const handleNewRepoCreated = () => {
    const newRepo = {
      name: newRepoName,
      createdAt: new Date().toLocaleString(),
    };
    setCreatedRepo(newRepo);
    onClose();
  };

  return (
    <Modal
  isOpen={isOpen}
  onClose={onClose}
  motionPreset="slideInBottom"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
  aria-modal="true"
>
  <ModalOverlay bg="rgba(0,0,0,0.4)" />
  <ModalContent
    bg="white"
    mx="auto"
    className="flex justify-center px-10 py-8 max-w-lg lg:w-2/5 w-full md:max-w-xl lg:max-w-3xl xl:max-w-4xl modal-container"
  >
    <ModalHeader
      className="uppercase text-2xl font-bold flex align-center justify-center"
      id="modal-title"
    >
      Create New Repository
    </ModalHeader>

    <ModalBody className="py-8" id="modal-description">
      <FormControl>
        <FormLabel className="font-bold py-3 text-md uppercase" htmlFor="repo-name">
          Name
        </FormLabel>
        <Input
          id="repo-name"
          placeholder="Enter repository name"
          value={newRepoName}
          onChange={(event) => setNewRepoName(event.target.value)}
          className="input w-full"
        />
        <FormLabel className="font-bold py-3 text-md uppercase mt-4" htmlFor="repo-description">
          Description
        </FormLabel>
        <Input
          id="repo-description"
          placeholder="Description"
          className="input w-full"
        />
      </FormControl>
      <RadioGroup onChange={setValue} value={value} className="pt-8 pb-4">
        <Checkbox value="private" pr={10}>Private</Checkbox>
        <Checkbox value="public">Public</Checkbox>
      </RadioGroup>
    </ModalBody>

    <ModalFooter className="mod-f">
      <Button
        className="text-white bg-black rounded-lg px-8 py-4 mr-4"
        onClick={handleNewRepoCreated}
        disabled={!newRepoName}
      >
        Create
      </Button>
      <Button
        className="text-white bg-black rounded-lg px-8 py-4"
        onClick={onClose}
      >
        Cancel
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
  )
};

// PropTypes for the component
CreateModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateModal;
