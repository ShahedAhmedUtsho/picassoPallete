
'use client'
import { useContext, useState } from 'react'
import { CloudArrowUp, Trash } from 'phosphor-react'
import { Button, Modal } from 'keep-react'
import { AuthContext } from '../../AuthProvider/AuthProvider'

 const DeleteModel = () => {

const {isDeleteOpen, closeDeleteModal,handleDelete,deleteID}=useContext(AuthContext)




  return (
    <>
      
      <Modal isOpen={isDeleteOpen} onClose={closeDeleteModal}>
        <Modal.Body className="space-y-3">
          <Modal.Icon>
            <Trash size={28} className='  text-red-600' />
          </Modal.Icon>
          <Modal.Content>
            <div className="!mb-6">
              <h3 className="mb-2 text-body-1 font-medium text-metal-900"> are you want to delete ?</h3>
              <p className="text-body-4 font-normal text-metal-600">
                If you delete, this craft delete permanently.
              </p>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={closeDeleteModal} size="sm" variant="outline" color="secondary" >
              Cancel
            </Button>
            <Button className='bg-[#fe777752] hover:bg-[#fe77778f] text-red-600' onClick={()=>{
                handleDelete(deleteID) ;
                closeDeleteModal()

            }} size="sm" color="primary">
              Delete
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}


export default DeleteModel