import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalNews = ({ show, onHide, source }) => {
  return (
    <Modal isOpen={show} toggle={onHide}>
      {source && (
        <>
          <ModalHeader toggle={onHide}>{source.title}</ModalHeader>
          <ModalBody>
            <p>{source.description}</p>
            <p>{source.publishedAt}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={onHide}>
              Cancel
            </Button>
          </ModalFooter>
        </>
      )}
    </Modal>
  );
};

export default ModalNews;