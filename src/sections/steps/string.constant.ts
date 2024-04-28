export const STRING_STEPS = {
    SELECT_YOUR_PLAN: "طرح خود را انتخاب کنید",
    SELECT_YOUR_GOAL: "هدف خود را انتخاب کنید",
    SUGGEST_BMI: "BMI پیشنهادی",
    BMI_DESCRIPTION: (val: string) =>
        `با توجه به وضعیت BMI شما بهترین پیشنهاد برای وزن هدف شما ${val} می باشد.`,
    PERSONAL_INFORMATION: "مشخصات فردی",
    PLAN_INFORMATION: "نوع و طرح برنامه انتخابی ",
    TIME_INFORMATION: "زمان بندی",
    ASSISTANT_INFORMATION: "مشخصات مربی",

    ARE_YOU_SURE_SUBMIT_DETAIL: "آیا از صحت اطلاعات ثبت شده اطمینان دارید؟",
    SUBMIT_DETAIL: "تایید اطلاعات",
    EDIT_DETAIL: "ویرایش اطلاعات",
    FREE_DAY_MESSAGE: (day: number) => `تعداد روز های باقیمانده مانده ${day}`,
    ACTIVE_YOUR_FREE_DAY: "اشتراک رایگان شما فعال شد",
    EXIST_PLAN_MESSAGE: "شما در حال حاضر یک هدف فعال دارید",
    CREATE_NEW_PLAN: "تعریف هدف جدید",
};
