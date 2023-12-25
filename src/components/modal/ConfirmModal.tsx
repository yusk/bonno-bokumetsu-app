/* eslint-disable react/destructuring-assignment */
import React from 'react'
import Modal from 'react-modal'
import { Button } from 'react-bootstrap'

Modal.setAppElement('#root')

type Props = {
  isOpen: boolean
  handleCloseModal: () => void
  handleSubmit: () => void
}

const ConfirmModal: React.FC<Props> = (props) => (
  <>
    <Modal isOpen={props.isOpen} className="Modal confrim-modal" overlayClassName="Overlay" onRequestClose={props.handleCloseModal}>
      <div className="modal-contents">
        <div className="modal-contents-buttons">
          <Button variant="light" onClick={props.handleCloseModal}>
            cancel
          </Button>
          <Button variant="danger" onClick={props.handleSubmit}>
            submit
          </Button>
        </div>
      </div>
    </Modal>
  </>
)

export default ConfirmModal
