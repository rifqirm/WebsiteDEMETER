import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../../utils/utils";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalKeranjang = ({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
  keterangan,
  kurang,
  tambah,
  changeHandler,
  handleSubmit,
  totalHarga,
  hapusPesanan,
}) => {
  if (keranjangDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {keranjangDetail.product.nama}{" "}
            <strong>
              (Rp. {numberWithCommas(keranjangDetail.product.harga)})
            </strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Total Harga :</Form.Label>
              <p>
                <strong>Rp. {numberWithCommas(totalHarga)}</strong>
              </p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Jumlah :</Form.Label>
              <br />
              <Button
                variant="success"
                size="sm"
                className="me-3"
                onClick={() => kurang()}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>

              <strong> {jumlah}</strong>

              <Button
                variant="success"
                size="sm"
                className="ms-3"
                onClick={() => tambah()}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Keterangan :</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="keterangan"
                placeholder="Contoh : Ekstra pelindungan saat proses kirim yaa"
                value={keterangan}
                onChange={(event) => changeHandler(event)}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Simpan
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => hapusPesanan(keranjangDetail.id)}
          >
            <FontAwesomeIcon icon={faTrash} className="mr-2 me-3" />
            Hapus Pesanan
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalKeranjang;
