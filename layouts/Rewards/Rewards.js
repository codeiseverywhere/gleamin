// var check = true;

// // -- Referral
// (function () {
//   $(document).ready(function () {
//     $(document).on("click", ".swell-referral-form-list-submit", function () {
//       temp_email = $("#swell-referral-refer-emails").val();
//     });

//     $(document).on("click", ".swell-share-referral-copy", function () {
//       setTimeout(function () {
//         detachReferralCopy();
//         $(".swell-referral-copy-link").html(
//           "<span>" +
//           $(".swell-referral-copy-link").html().replace("http://", "") +
//           "</span>"
//         );
//       }, 20);
//     });

//     $("body").on("click", ".swell-referral-back-link.checkout", function (e) {
//       $(".gleamin-rewards").hide();
//     });

//     $("body").on("click", ".swell-referral-back-link", function (e) {
//       $(".swell-referral").removeClass("thankyou");
//       $(".swell-referral-sidebar-details").show();
//     });

//     $(document).on("swell:referral:error", function (
//       jqXHR,
//       textStatus,
//       errorThrown
//     ) {
//       if (textStatus && textStatus === "EMAILS_ALREADY_PURCHASED") {
//         $(".refer-customer-error").remove();
//         $(".swell-referral-sidebar-details").show();
//         $(".swell-referral").removeClass("thankyou");
//         $(".swell-referral-content-container").addClass("error-message");
//         $(".swell-referral-form-body").prepend(
//           '<p class="refer-customer-error">Sorry! Looks like this person has already made a purchase. Try referring another friend.</p>'
//         );
//         $("#swell-referral-refer-emails").addClass("error-border");
//       } else if (
//         textStatus &&
//         textStatus === "Please enter a valid email address"
//       ) {
//         $(".refer-customer-error").remove();
//         $(".swell-referral-sidebar-details").show();
//         $(".swell-referral").removeClass("thankyou");
//         $(".swell-referral-content-container").addClass("error-message");
//         $(".swell-referral-form-body").prepend(
//           '<p class="refer-customer-error">Please enter valid email addresses seperated with commas</p>'
//         );
//         $("#swell-referral-refer-emails").addClass("error-border");
//       }
//     });

//     $(document).on("swell:referral:success", function (
//       jqXHR,
//       textStatus,
//       errorThrown
//     ) {
//       // thankyou();
//       window.location.href = '/pages/thank-you?source=referral';
//     });

//     if (check) {
//       initialize_swell();
//       check = false;
//     }
//   });

//   if (window.location.href.indexOf("orders") > 0) {
//     initialize_swell();
//     check = false;
//   }
// }.call(this));

// function initialize_swell() {
//   // -- Redeem
//   $(document).on("swell:initialized", function () {
//     // if ($(".swell-redeem-section").length > 0) {
//     var options = spapi.activeRedemptionOptions;
//     for (var t = 0; t < options.length; t++) {
//       if (options[t].discount_type == "custom") {
//         // $(".redeem-new-or-existing").append(
//         //   "<li class='Rewards-rfd__grid-item swell-redemption-link' data-redemption-option-id='" +
//         //     options[t].id +
//         //     "'> <div class='Rewards-rfd__grid-item-backing'> <div class='Rewards-rfd__grid-item-inner'> <h3 class='Rewards-rfd__grid-item-discount'>" +
//         //     options[t].name.split(" ")[0] +
//         //     "</h3> <h5 class='Rewards-rfd__grid-item-cost'>" +
//         //     options[t].cost_text +
//         //     "</h5> <p class='Rewards-rfd__grid-item-description'>" +
//         //     options[t].description +
//         //     " </p> </div> </div> </li>"
//         // );
//       } else if (options[t].discount_type == "fixed_amount") {
//         $(".redeem-one-time").append(
//           "<li class='Rewards-rfd__grid-item swell-redemption-link' data-redemption-option-id='" +
//           options[t].id +
//           "'> <div class='Rewards-rfd__grid-item-backing'> <div class='Rewards-rfd__grid-item-inner'> <h3 class='Rewards-rfd__grid-item-discount'>" +
//           options[t].name.split(" ")[0] +
//           "</h3> <h5 class='Rewards-rfd__grid-item-cost'>" +
//           options[t].cost_text +
//           "</h5> <p class='Rewards-rfd__grid-item-description'>" +
//           options[t].description +
//           " </p> </div> </div> </li>"
//         );
//       }
//     }
//     $(".redeem-new-or-existing .spinner-icon").detach();
//     $(".redeem-new-or-existing").addClass("loaded");
//     $(".redeem-one-time .spinner-icon").detach();
//     $(".redeem-one-time").addClass("loaded");
//     // }
//   });

//   // -- Campaign
//   $(document).on("swell:setup", function () {
//     if ($(".campaigns").length > 0) {
//       Swell.Campaign.initializeCampaigns(
//         ".campaigns",
//         SwellConfig.Campaign.opts
//       );
//       var campaigns = [];
//       spapi.customer.perks.forEach(function (val, index) {
//         if (val.awarded) {
//           campaigns.push(val.campaign_id);
//         }
//       });
//       var options = spapi.activeCampaigns;
//       if (spapi.authenticated) {
//         $(".swell-campaign").each(function () {
//           if (campaigns.includes($(this).data("campaign-id"))) {
//             $(this).addClass("completed");
//             $(this).data("campaign-id", "-1");
//           }
//         });
//         swellAPI.refreshEmbeds();
//       }
//       $(".campaigns").addClass("loaded");
//       $(".campaigns .spinner-icon").detach();
//     }

//     if ($(".swell-referral").length > 0) {
//       SwellConfig.Referral.initializeReferral(".swell-referral");
//     }
//     if (
//       spapi.authenticated ||
//       (spapi.customer.referral_receipts &&
//         spapi.customer.referral_receipts.length > 0)
//     ) {
//       setupReferrals();
//     }
//     $(".inner-holder").css("display", "flex");
//     $("body").on("click", ".swell-referral-copy", function (e) {
//       if ($(e.target).hasClass("swell-referral-copy")) {
//         e.stopPropagation();
//       }
//     });
//     $(".spinner-icon").remove();
//     $(".gleamin-rewards").css("display", "flex");
//   });
// }

// (function () {
//   window.SwellConfig = window.SwellConfig || {};

//   SwellConfig.Campaign = {
//     opts: {
//       templates: {
//         campaign:
//           "<div class='Rewards-ep__grid-item swell-campaign swell-campaign-content' data-display-mode='modal' data-campaign-id='<%=campaign.id %>'> <div class='Rewards-ep__grid-item-backing'> <div class='Rewards-ep__grid-item-image-wrap'> <img  src='<%= campaign.icon %>' class='Rewards-ep__grid-item-image' data-icon='<%=campaign.icon %>'> </div> <div class='Rewards-ep__grid-item-content-wrap'> <h5 class='Rewards-ep__grid-item-points'> <%= campaign.reward_text %> </h5> <p class='Rewards-ep__grid-item-title'> <%= campaign.title %> </p> </div> </div>",
//       },
//     },
//   };
// }.call(this));

// // referral
// (function () {
//   window.SwellConfig = window.SwellConfig || {};

//   SwellConfig.Referral = {
//     opts: {
//       localization: {

//         //BUILD
//         referralTitle: "Refer a friend",
//         referralText: "Give your friends $10 off on their first order of $30+ and get $10 for each successful referral.",
//         referralInstructions: "Now, enter your friends' email",
//         referralInputPlaceholder: "Enter e-mail address here..",
//         referralBtnText: "Next",


//         referralSidebarDetailsAction: "Refer a Friend",
//         referralSidebarDetailsReward: "",

//         referralRegisterHeading: "<span>Give $10, Get $10<span>",
//         referralRegisterFormDetails:
//           "Now enter your email below to get started.",
//         referralRegisterFormEmail: "Enter email",
//         referralRegisterFormSubmit: "Next",
//         referralRegisterDetails: "<%= referralCampaign.details %>",

//         referralReferHeading: "<span>Give $10, Get $10<span>",
//         referralReferFormEmails: "Your friends' emails (separated by commas)",
//         referralReferFormSubmit: "Send",
//         referralReferFormDetails: "Now, enter your friends' emails.",
//         referralReferFormEmailsDetails: "",
//         referralReferDetails: "<%= referralCampaign.details %>",

//         referralReferMediaDetails:
//           "You can also share your link with the buttons below.",

//         referralShareFacebook: "Share",
//         referralShareCopy: "Copy Link",
//         referralShareSMS: "SMS",
//         referralShareMessenger: "Message",

//         referralFacebookIcon: "swell-icon-facebook1",
//         referralLinkIcon: "swell-icon-copy",
//         referralSMSIcon: "swell-icon-sms",
//         referralMessengerIcon: "swell-icon-message",

//         referralThanksHeading: "",
//         referralThanksDetails: "",
//         // referralThanksHeading: "Thanks for Referring!",
//         // referralThanksDetails: "Remind your friends to check their emails.",

//         referralCopyHeading: "Copy Link",
//         referralCopyButton: "Copy Link",
//         referralCopyDetails: "Copy link and share with your friends",
//       },
//       templates: {
//         referralRegister:
//           '<div class="Refer-i__intro-copy"> <h4 class="Refer-i__intro-title"> <%= localization.referralTitle %> </h4> <p class="Refer-i__intro-text"> <%= localization.referralText %> </p> <p class="Refer-i__intro-instructions"> <%= localization.referralInstructions %> </p> <div class="Refer-i__intro-form-wrap"> <form  name="swell-referral-refer-form"  id="swell-referral-refer-form"  method="POST" action="."> <div class="Refer-i__intro-form-inputs"> <input class="Refer-i__intro-form-input" type="text" name="swell-referral-refer-emails" id="swell-referral-refer-emails" required="required" placeholder="<%= localization.referralInputPlaceholder %>"> <input class="Refer-i__intro-form-submit Site__button-main" type="submit" name="swell-referral-refer-submit" id="swell-referral-refer-submit" value="<%= localization.referralBtnText %>"> </div> </form> </div> </div>',
//         referralRefer:
//           '<div class="Refer-i__intro-copy"> <h4 class="Refer-i__intro-title"> <%= localization.referralTitle %> </h4> <p class="Refer-i__intro-text"> <%= localization.referralText %> </p> <p class="Refer-i__intro-instructions"> <%= localization.referralInstructions %> </p> <div class="Refer-i__intro-form-wrap"> <form  name="swell-referral-refer-form"  id="swell-referral-refer-form"  method="POST" action="."> <div class="Refer-i__intro-form-inputs"> <input class="Refer-i__intro-form-input" type="text" name="swell-referral-refer-emails" id="swell-referral-refer-emails" required="required" placeholder="<%= localization.referralInputPlaceholder %>"> <input class="Refer-i__intro-form-submit Site__button-main" type="submit" name="swell-referral-refer-submit" id="swell-referral-refer-submit" value="<%= localization.referralBtnText %>"> </div> </form> </div> </div>',
//         referralCopy:
//           '<span></span>',
//       },
//     },
//     initializeReferral: function (containerSelector) {
//       var email = $(containerSelector).data("customer-email");
//       if (email) {
//         spapi.storage.setItem("referrer_email", email);
//         spapi.customer.email = email;
//       }
//       Swell.Referral.initializeReferral(
//         ".swell-referral",
//         SwellConfig.Referral.opts
//       );
//       $(".swell-referral").show();
//     },
//   };
// }.call(this));

// function setupReferrals() {
//   $(".swell-referral-content").show();
//   $(".border").show();
//   if (spapi.customer.referral_receipts.length > 0) {
//     $(".referral-table").show();

//     referrals = spapi.customer.referral_receipts;

//     referrals.forEach(function (referral) {
//       status = null;

//       if (referral.completed_at) {
//         status = "Purchased ($10 earned)";
//       } else {
//         status = "Invited";
//       }

//       $(".swell-referral-table tbody").append(
//         '<tr> <td> <div class="trucate-email">' +
//         referral.email +
//         "</div></td><td>" +
//         status +
//         "</td></tr>"
//       );
//     });
//   }
// }

// function detachReferralCopy() {
//   if ($(".swell-referral-copy").length > 0) {
//     $("body").append($(".swell-referral-copy").detach());
//   }
// }

// function thankyou() {
//   // $(".swell-referral-sidebar-details").hide();
//   // $(".swell-referral").addClass("thankyou");
//   // if ($(".swell-referral-table").length > 0) {
//   //   $(".swell-referral-table tbody").append(
//   //     "<tr><td><div class='trucate-email'>" +
//   //     temp_email +
//   //     "</div></td><td>Invited</td></tr>"
//   //   );
//   // }
// }
