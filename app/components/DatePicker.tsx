import React from 'react';
import { DateValue, CalendarDate } from '@internationalized/date';
import { DateInputProps, TimeInputProps } from '@nextui-org/date-input';
import { ButtonProps } from '@nextui-org/button';
import { CalendarProps } from '@nextui-org/calendar';
import { PopoverProps } from '@nextui-org/popover';
import { useDatePicker, DatePickerProps } from '@nextui-org/date-picker';
import { DOMAttributes } from '@nextui-org/system';

function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
    const {
        state,
        endContent,
        selectorIcon,
        showTimeField,
        isCalendarHeaderExpanded,
        disableAnimation,
        CalendarTopContent,
        CalendarBottomContent,
        getDateInputProps,
        getPopoverProps,
        getSelectorButtonProps,
        getCalendarProps,
        getTimeInputProps,
        getSelectorIconProps,
    } = useDatePicker(props);

    return (
        <div className={props.className}>
            {/* Input Field */}
            <input {...getDateInputProps()} />

            {/* Selector Button */}
            <button {...getSelectorButtonProps()}>
                {selectorIcon}
            </button>

            {/* Calendar Popover */}
            <div {...getPopoverProps()}>
                <div {...getCalendarProps()}>
                    {CalendarTopContent}
                    {/* Calendar Content */}
                    {CalendarBottomContent}
                </div>
            </div>

            {/* Time Input (if applicable) */}
            {showTimeField && <input {...getTimeInputProps()} />}
        </div>
    );
}

export default DatePicker;