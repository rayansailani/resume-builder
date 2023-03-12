import React from "react";
import { Textarea } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { inputFieldsConfig, customFieldInputConfig } from "./formFields";

function FormComponent() {
  
  return (
    <div className="form-container flex-grow overflow-y-scroll overflow-x-hidden 
        bg-[#E3EBED] rounded-tr-[40px] rounded-tl-[40px] pl-[75px] pr-[60px] py-[100px]">
      {inputFieldsConfig.map((inputField) => {
        return (
          <>
            <div className="flex">
              <div className="w-[25%] py-[20px] border-r-[2px] border-[#00494D]">
                <p className="font-[500] text-[#5e7a7d] text-[24px] uppercase">
                  {inputField.label}
                </p>
              </div>
              <div className="flex flex-col gap-[30px] w-[75%] py-[20px] px-[50px] pl-[40px]">
                <div className="border border-dashed border-gray-500 rounded-md p-4 flex flex-row justify-center items-end gap-[30px]">
                  <div className="flex flex-col grow space-y-4 border-dashed border-5 border-red ">
                    {customFieldInputConfig[inputField.index]?.fields.map(
                      (customInputField) => {
                        if (
                          customInputField.type === "text" ||
                          customInputField.type === "email"
                        ) {
                          return (
                            <TextField
                              variant="standard"
                              type={customInputField.type}
                              label={customInputField.label}
                            />
                          );
                        } else if (customInputField.type === "textarea") {
                          return (
                            <Textarea
                              variant="standard"
                              label={customInputField.label}
                            />
                          );
                        } else {
                          // date picker
                          return (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                label={customInputField.label}
                                views={customInputField.type}
                              />
                            </LocalizationProvider>
                          );
                        }
                      }
                    )}
                  </div>
                  <div
                    className="bg-[#00494D] hover:bg-[#c5e4e7] hover:text-[black] rounded-[999px] p-[2px]
                          flex items-center justify-center transition-all duration-[200ms] h-max"
                  >
                    <Icon
                      className="text-white hover:text-[#00494D] mx-[8px]  transition-all duration-[200ms]"
                      icon="material-symbols:add"
                      height={25}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default FormComponent;
