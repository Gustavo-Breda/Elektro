import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

import { ControllerView } from "./styles";
import { FormContainer, FormContainerProps } from "../index";


export function ControlledFormContainer<FormType extends FieldValues> (
    {name, control, rules, ...textContainerProps}: 
    UseControllerProps<FormType> & FormContainerProps) {
        return (
            <ControllerView>
                <Controller
                name={name}
                rules={rules}
                control={control}
                render={({field}) => (
                    <FormContainer 
                    {...textContainerProps}
                    value={field.value}
                    onChangeText={field.onChange}/>
                )}/>
            </ControllerView>
        );
};
