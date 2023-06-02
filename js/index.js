
let currentStep = 1;

function showStep(step) {
  $(`#step${step}`).show();
}

function hideStep(step) {
  $(`#step${step}`).hide();
}

function nextStep() {
  hideStep(currentStep);
  currentStep++;
  showStep(currentStep);

  if (currentStep === 1) {
    $('#step-1').addClass('active');
    $('#step-2').removeClass('active').addClass('disabled');
    $('#step-3').removeClass('active').addClass('disabled');
    $('#step-4').removeClass('active').addClass('disabled');

  } else if (currentStep === 2) {

    $('#step-1').removeClass('active');
    $('#step-2').addClass('active');
    $('#step-3').removeClass('active').addClass('disabled');
    $('#step-4').removeClass('active').addClass('disabled');

  } else if (currentStep === 3) {

    $('#step-1').removeClass('active');
    $('#step-2').removeClass('active');
    $('#step-3').addClass('active');
    $('#step-4').removeClass('active').addClass('disabled');

  }
}

function prevStep() {

  hideStep(currentStep);
  currentStep--;
  showStep(currentStep);

  if (currentStep === 1) {

    $('#step-1').addClass('active');
    $('#step-2').removeClass('active').addClass('disabled');
    $('#step-3').removeClass('active').addClass('disabled');
    $('#step-4').removeClass('active').addClass('disabled');

  } else if (currentStep === 2) {

    $('#step-1').removeClass('active');
    $('#step-2').addClass('active');
    $('#step-3').removeClass('active').addClass('disabled');
    $('#step-4').removeClass('active').addClass('disabled');

  } else if (currentStep === 3) {

    $('#step-1').removeClass('active');
    $('#step-2').removeClass('active');
    $('#step-3').addClass('active');
    $('#step-4').removeClass('active').addClass('disabled');

  }
}

showStep(1);

$('#step-1').addClass('active');