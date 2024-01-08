'use client';

import './style.css';
import { listInputGlobal } from '@/types/types-general';
import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IProps {
  listInputGlobal: listInputGlobal[];
  setValueInput?: any;
  register: any;
  errors: any;
}

interface IPropsItemSelectOption {
  itemSelectOption: any;
  setValueInputSelectOption: any;
}
function ItemSelectOption(props: IPropsItemSelectOption) {
  const { itemSelectOption, setValueInputSelectOption } = props;
  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-[3.43rem] justify-between max-md:h-[10rem] max-md:text-[4rem] max-md:pl-[10px]"
        >
          {currentValue
            ? itemSelectOption.listOption &&
              itemSelectOption.listOption.find(
                (framework: any) => framework.value === currentValue
              )?.label
            : itemSelectOption.placeHolder ?? 'No data found.'}
          {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        style={{ width: itemSelectOption.width ?? '25rem' }}
        className="p-0"
      >
        <Command className="w-full">
          <CommandInput
            placeholder={itemSelectOption?.placeHolder ?? ''}
            className="h-9 w-full"
          />
          <CommandEmpty>No data found.</CommandEmpty>
          <CommandGroup className="w-full">
            {itemSelectOption.listOption &&
              itemSelectOption.listOption.map((itemOption: any) => (
                <CommandItem
                  key={itemOption.value}
                  value={itemOption.value}
                  onSelect={(value) => {
                    setCurrentValue(value === currentValue ? '' : value);
                    setValueInputSelectOption(itemSelectOption.name, value);
                    setOpen(false);
                  }}
                  className="w-full"
                >
                  {itemOption.label}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      currentValue === itemOption.value
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default function GroupInputGlobal(props: IProps) {
  const { listInputGlobal, setValueInput, register } = props;

  return (
    <div className="input-global">
      {listInputGlobal &&
        listInputGlobal.map((item, index) => (
          <div key={index}>
            {item.type === 'input' && (
              <div>
                <div className=" relative mb-[1rem] max-md:mb-[3rem]">
                  <input
                    type="text"
                    {...register(item.name, { required: item.require })}
                    name="input"
                    placeholder=""
                    onChange={(value) =>
                      setValueInput(item.name, value.target.value)
                    }
                    className="px-[1rem] font-semibold border-[1px] border-[#EAEAEA] outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[0.3rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[4rem]"
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label
                    className="absolute font-medium bg-white top-[50%] -translate-y-1/2 left-[10px] py-[0px] px-[4px] text-[#00000040] transition-all duration-100 ease-linear max-md:text-[4rem]"
                    htmlFor="input"
                  >
                    {item.placeHolder}
                  </label>
                </div>
                {/* {item.require === true && `errors.${item.name}` && ( */}
                {/*  <span>This field is required</span> */}
                {/* )} */}
              </div>
            )}

            {item.type === 'text-area' && (
              <div>
                <div className="relative mb-[1rem] max-md:mb-[3rem]">
                  <textarea
                    name="comment"
                    rows="3"
                    cols="30"
                    {...register(item.name, { required: item.require })}
                    placeholder=""
                    onChange={(value) =>
                      setValueInput(item.name, value.target.value)
                    }
                    className="px-[1rem] py-[1rem] border-2 border-[#EAEAEA] font-semibold
                    outline-[#EAEAEA] focus:outline-[#55D5D2]
                    focus:border-[#55D5D2] rounded-[0.3rem] h-[8rem] w-full
                    text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[4rem]"
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label
                    className="absolute font-medium bg-white top-[50%] -translate-y-1/2 left-[10px] py-[0px] px-[4px] text-[#00000040] transition-all duration-100 ease-linear max-md:text-[4rem]"
                    htmlFor="input"
                  >
                    {item.placeHolder}
                  </label>
                </div>
                {/* {item.require === true && `errors.${item.name}` && ( */}
                {/*  <span>This field is required</span> */}
                {/* )} */}
              </div>
            )}

            {item.type === 'select-option' && (
              <div className="mb-[1rem] max-md:mb-[3rem]">
                <ItemSelectOption
                  itemSelectOption={item}
                  setValueInputSelectOption={setValueInput}
                />
                {/* <Popover open={open} onOpenChange={setOpen}> */}
                {/*  <PopoverTrigger asChild> */}
                {/*    <Button */}
                {/*      variant="outline" */}
                {/*      role="combobox" */}
                {/*      aria-expanded={open} */}
                {/*      className="w-full h-[3.43rem] justify-between max-md:h-[10rem] max-md:text-[4rem] max-md:pl-[10px]" */}
                {/*    > */}
                {/*      {currentValue */}
                {/*        ? item.listOption && */}
                {/*          item.listOption.find( */}
                {/*            (framework) => framework.value === currentValue */}
                {/*          )?.label */}
                {/*        : item.placeHolder ?? 'No data found.'} */}
                {/*      /!* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> *!/ */}
                {/*    </Button> */}
                {/*  </PopoverTrigger> */}
                {/*  <PopoverContent */}
                {/*    align="start" */}
                {/*    style={{ width: item.width ?? '25rem' }} */}
                {/*    className="p-0" */}
                {/*  > */}
                {/*    <Command className="w-full"> */}
                {/*      <CommandInput */}
                {/*        placeholder={item?.placeHolder ?? ''} */}
                {/*        className="h-9 w-full" */}
                {/*      /> */}
                {/*      <CommandEmpty>No data found.</CommandEmpty> */}
                {/*      <CommandGroup className="w-full"> */}
                {/*        {item.listOption && */}
                {/*          item.listOption.map((itemOption) => ( */}
                {/*            <CommandItem */}
                {/*              key={itemOption.value} */}
                {/*              value={itemOption.value} */}
                {/*              onSelect={(value) => { */}
                {/*                setCurrentValue( */}
                {/*                  value === currentValue ? '' : value */}
                {/*                ); */}
                {/*                setValueInput(item.name, value); */}
                {/*                setOpen(false); */}
                {/*              }} */}
                {/*              className="w-full" */}
                {/*            > */}
                {/*              {itemOption.label} */}
                {/*              <CheckIcon */}
                {/*                className={cn( */}
                {/*                  'ml-auto h-4 w-4', */}
                {/*                  currentValue === itemOption.value */}
                {/*                    ? 'opacity-100' */}
                {/*                    : 'opacity-0' */}
                {/*                )} */}
                {/*              /> */}
                {/*            </CommandItem> */}
                {/*          ))} */}
                {/*      </CommandGroup> */}
                {/*    </Command> */}
                {/*  </PopoverContent> */}
                {/* </Popover> */}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
