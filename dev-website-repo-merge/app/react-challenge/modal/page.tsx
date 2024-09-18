"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

interface ModalProps {
  isOpen: Boolean;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as HTMLElement)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <div
      style={{ display: isOpen ? "flex" : "none" }}
      className={styles.modal_overlay}
    >
      <div className={styles.modal_container} ref={modalRef}>
        <p>This is modal</p>
        <button onClick={() => onClose()} className={styles.button}>
          Close
        </button>
      </div>
    </div>
  );
}

export default function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className={styles.button}>
        Click open the modal
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
