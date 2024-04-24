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
  Checkbox,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const CreateModal = ({ isOpen, onClose, onCreate }) => {
  const [newRepoName, setNewRepoName] = useState("");
  const [createdRepo, setCreatedRepo] = useState(null);
  const [value, setValue] = React.useState("public");

  const handleNewRepoCreated = () => {
    const newRepo = {
      name: newRepoName,
      createdAt: new Date().toLocaleString(),
    };
    setCreatedRepo(newRepo);
    // Call onCreate callback with new repository data
    onCreate(newRepo);
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
      <ModalOverlay bg="rgba(0,0,0,0.8)" />
      <ModalContent
        bg="white"
        mx="auto"
        className="modal-container flex justify-center px-10 py-5 max-w-lg lg:w-2/5 w-full md:max-w-xl lg:max-w-3xl xl:max-w-4xl "
      >
        <ModalHeader
          className="uppercase font-bold flex align-center justify-center modal-head-font"
          id="modal-title"
        >
          Create New Repository
        </ModalHeader>

        <ModalBody className="pt-6 pb-4" id="modal-description">
          <FormControl>
            <FormLabel
              className="font-bold py-3 text-md uppercase new-repo-name"
              htmlFor="repo-name"
            >
              Name
            </FormLabel>
            <Input
              id="repo-name"
              placeholder="Enter repository name"
              value={newRepoName}
              onChange={(event) => setNewRepoName(event.target.value)}
              className="input w-full"
              _placeholder={{ fontSize: "13px" }}
            />
            <FormLabel
              className="font-bold py-3 text-md uppercase mt-4 new-repo-des"
              htmlFor="repo-description"
            >
              Description
            </FormLabel>
            <Input
              id="repo-description"
              placeholder="Description"
              className="input w-full"
              _placeholder={{ fontSize: "13px" }}
            />
          </FormControl>
          <RadioGroup onChange={setValue} value={value} className="pt-6 pb-4">
            <Checkbox value="private" pr={10} className="text-sm">
              Private
            </Checkbox>
            <Checkbox value="public" className="text-sm">Public</Checkbox>
          </RadioGroup>
        </ModalBody>

        <ModalFooter className="mod-f">
          <Button
            className="action-btn text-white bg-black rounded-lg px-5 py-3 mr-4"
            onClick={handleNewRepoCreated}
            disabled={!newRepoName}
          >
            Create
          </Button>
          <Button
            className="action-btn text-white bg-black rounded-lg px-5 py-3"
            onClick={onClose}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

// PropTypes for the component
CreateModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default CreateModal;
