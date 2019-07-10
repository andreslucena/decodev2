/*
 * DECODE App – A mobile app to control your personal data
 *
 * Copyright (C) 2019 – DRIBIA Data Research S.L.
 *
 * DECODE App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DECODE App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * email: info@dribia.com
 */

export default {
  translation: {
    back: 'Back',
    cancel: 'Cancel',
    confirm: 'Confirm',
    greeting: 'This is the DECODE App v2',
    home: 'Home',
    next: 'Next',
    refreshStats: 'Refresh stats from credential issuer',
    refresh: 'Refresh',
    total: 'Total',
    refreshDate: 'Updated on {{date, llll}}',
    second: 'A second screen',
    walkthrough: {
      refresh: 'This will call the credential issuer API',
      next: 'Click here to go to another screen',
      crash: 'Click here to generate a crash',
    },
  },
  carousel: {
    title: 'DECODE',
    txt1: 'your personal data manager',
    txt2: 'Your data has value. It\'s important you have control over it',
    txt3: 'With DECODE, you choose which personal data to share and how it is used',
    txt4: 'Store your personal data with high security standards',
    done: 'Done',
    skip: 'Skip',
    next: 'Next',
  },
  attributes: {
    add: 'Add attribute',
    available: 'Available attributes',
    confirmDelete: 'Are you sure you want to delete {{ name }}?',
    my: 'My attributes',
    empty: 'Get started by adding some data.\nTap the button below to begin.',
    emptyAtlas: 'You have a value set for all possible data.',
    enterValue: 'Enter a value',
    save: 'Save',
  },
  applications: {
    activate: 'Activate service via QR',
    available: 'Available applications',
    empty: 'There are no applications available',
    history: 'Usage history',
    more: '+ information',
    usageCount: 'Usage count',
    firstUse: 'First use',
    lastUse: 'Last use',
    averageUse: 'Average',
    times: 'Once a {{ unit }}',
    times_plural: '{{ count }} times a {{ unit }}',
    times_interval: '(0){Less than once a {{ unit }}};(1){Once a {{ unit }}};(2){Twice a {{ unit }}};(3-inf){{{ count }} times a {{ unit }}}',
    sharedData: 'Shared data',
    year: 'year',
    month: 'month',
    week: 'week',
    day: 'day',
  },
  settings: {
    title: 'Settings',
    review: 'Review help',
    reset: 'Erase all data',
    warning: 'You are going to erase all the app\'s memory (data, certificates,...)\n\n'
    + 'This step has no turning back.\n\n'
    + 'Do you want to continue?\n',
  },
  about: {
    title: 'Information',
    text1: 'The DECODE app is part of a project to return <b>data sovereignty</b> to citizens',
    text2: 'With the DECODE app you can <b>share your data</b> with <b>compatible applications</b> using last generation <b>cryptographic certificates</b>',
    more: 'I want more information!',
  },
  scanner: {
    title: 'QR scanner',
  },
};
