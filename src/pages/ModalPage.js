import Modal from '../components/Modal';
import Button from '../components/Button';
import {useState} from 'react';

function ModalPage(){
   const[showModal,setShowModal]=useState(false);

   const handleClick=()=>{
    setShowModal(true);
   }

   const handleClose=()=>{
    setShowModal(false);
   }

   const btn=<div><Button primary onClick={handleClose}>I agree</Button></div>

   const modal=<Modal handleClose={handleClose} actionBar={btn}>Here is the agreement. Read carefully first</Modal>
    return(
        <div >
            <div><Button primary onClick={handleClick} >Open the Modal</Button></div>
            {showModal&&modal}

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra velit. Phasellus eu erat eget sapien rutrum pharetra. Maecenas vel nisl non sapien maximus varius. Proin ac erat ac ligula posuere dapibus ac a libero. Vestibulum quis elementum mauris. Aliquam non enim vehicula, hendrerit risus iaculis, tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vulputate tellus in finibus fringilla. Integer lectus nunc, ultrices lobortis nulla sed, vehicula feugiat sapien. Suspendisse molestie nibh at neque interdum pharetra. Nulla posuere nibh ipsum, id pharetra ante euismod ut. Aenean hendrerit dui at pharetra fringilla.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra velit. Phasellus eu erat eget sapien rutrum pharetra. Maecenas vel nisl non sapien maximus varius. Proin ac erat ac ligula posuere dapibus ac a libero. Vestibulum quis elementum mauris. Aliquam non enim vehicula, hendrerit risus iaculis, tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vulputate tellus in finibus fringilla. Integer lectus nunc, ultrices lobortis nulla sed, vehicula feugiat sapien. Suspendisse molestie nibh at neque interdum pharetra. Nulla posuere nibh ipsum, id pharetra ante euismod ut. Aenean hendrerit dui at pharetra fringilla.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra velit. Phasellus eu erat eget sapien rutrum pharetra. Maecenas vel nisl non sapien maximus varius. Proin ac erat ac ligula posuere dapibus ac a libero. Vestibulum quis elementum mauris. Aliquam non enim vehicula, hendrerit risus iaculis, tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vulputate tellus in finibus fringilla. Integer lectus nunc, ultrices lobortis nulla sed, vehicula feugiat sapien. Suspendisse molestie nibh at neque interdum pharetra. Nulla posuere nibh ipsum, id pharetra ante euismod ut. Aenean hendrerit dui at pharetra fringilla.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra velit. Phasellus eu erat eget sapien rutrum pharetra. Maecenas vel nisl non sapien maximus varius. Proin ac erat ac ligula posuere dapibus ac a libero. Vestibulum quis elementum mauris. Aliquam non enim vehicula, hendrerit risus iaculis, tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vulputate tellus in finibus fringilla. Integer lectus nunc, ultrices lobortis nulla sed, vehicula feugiat sapien. Suspendisse molestie nibh at neque interdum pharetra. Nulla posuere nibh ipsum, id pharetra ante euismod ut. Aenean hendrerit dui at pharetra fringilla.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra velit. Phasellus eu erat eget sapien rutrum pharetra. Maecenas vel nisl non sapien maximus varius. Proin ac erat ac ligula posuere dapibus ac a libero. Vestibulum quis elementum mauris. Aliquam non enim vehicula, hendrerit risus iaculis, tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vulputate tellus in finibus fringilla. Integer lectus nunc, ultrices lobortis nulla sed, vehicula feugiat sapien. Suspendisse molestie nibh at neque interdum pharetra. Nulla posuere nibh ipsum, id pharetra ante euismod ut. Aenean hendrerit dui at pharetra fringilla.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra velit. Phasellus eu erat eget sapien rutrum pharetra. Maecenas vel nisl non sapien maximus varius. Proin ac erat ac ligula posuere dapibus ac a libero. Vestibulum quis elementum mauris. Aliquam non enim vehicula, hendrerit risus iaculis, tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vulputate tellus in finibus fringilla. Integer lectus nunc, ultrices lobortis nulla sed, vehicula feugiat sapien. Suspendisse molestie nibh at neque interdum pharetra. Nulla posuere nibh ipsum, id pharetra ante euismod ut. Aenean hendrerit dui at pharetra fringilla.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra velit. Phasellus eu erat eget sapien rutrum pharetra. Maecenas vel nisl non sapien maximus varius. Proin ac erat ac ligula posuere dapibus ac a libero. Vestibulum quis elementum mauris. Aliquam non enim vehicula, hendrerit risus iaculis, tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vulputate tellus in finibus fringilla. Integer lectus nunc, ultrices lobortis nulla sed, vehicula feugiat sapien. Suspendisse molestie nibh at neque interdum pharetra. Nulla posuere nibh ipsum, id pharetra ante euismod ut. Aenean hendrerit dui at pharetra fringilla.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra velit. Phasellus eu erat eget sapien rutrum pharetra. Maecenas vel nisl non sapien maximus varius. Proin ac erat ac ligula posuere dapibus ac a libero. Vestibulum quis elementum mauris. Aliquam non enim vehicula, hendrerit risus iaculis, tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vulputate tellus in finibus fringilla. Integer lectus nunc, ultrices lobortis nulla sed, vehicula feugiat sapien. Suspendisse molestie nibh at neque interdum pharetra. Nulla posuere nibh ipsum, id pharetra ante euismod ut. Aenean hendrerit dui at pharetra fringilla.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra velit. Phasellus eu erat eget sapien rutrum pharetra. Maecenas vel nisl non sapien maximus varius. Proin ac erat ac ligula posuere dapibus ac a libero. Vestibulum quis elementum mauris. Aliquam non enim vehicula, hendrerit risus iaculis, tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vulputate tellus in finibus fringilla. Integer lectus nunc, ultrices lobortis nulla sed, vehicula feugiat sapien. Suspendisse molestie nibh at neque interdum pharetra. Nulla posuere nibh ipsum, id pharetra ante euismod ut. Aenean hendrerit dui at pharetra fringilla.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra velit. Phasellus eu erat eget sapien rutrum pharetra. Maecenas vel nisl non sapien maximus varius. Proin ac erat ac ligula posuere dapibus ac a libero. Vestibulum quis elementum mauris. Aliquam non enim vehicula, hendrerit risus iaculis, tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vulputate tellus in finibus fringilla. Integer lectus nunc, ultrices lobortis nulla sed, vehicula feugiat sapien. Suspendisse molestie nibh at neque interdum pharetra. Nulla posuere nibh ipsum, id pharetra ante euismod ut. Aenean hendrerit dui at pharetra fringilla.
            </p>
            

        </div>
    );
}

export default ModalPage;