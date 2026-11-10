window.GiftCards = {
  setAdminDatepicker: function() {
    $(document).ready(function() {
      var $picker = $('.giftcard-datepicker');
      if ($picker.val()) {
        $picker.datepicker('setDate', new Date($picker.val().split('-')));
        $picker.datepicker('option', 'minDate', new Date());
      }
    });
  }
};
