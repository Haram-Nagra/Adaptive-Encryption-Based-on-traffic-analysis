import React from "react";
import EncryptionForm from "../components/encrypt-form";
import Lamp from "../components/lamp";

export default function Encrypt() {
    return (

        <Lamp paddingY="py-16">
            <EncryptionForm />
        </Lamp>
    );
}
