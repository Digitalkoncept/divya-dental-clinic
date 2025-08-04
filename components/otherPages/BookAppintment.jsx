"use client";
import React from "react";

export default function BookAppintment() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={120}
          data-mobile={70}
          data-smobile={70}
        />
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="your-information">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={63}
              data-mobile={63}
              data-smobile={63}
            />
            <h4 className="text-color-title-sidebar wow fadeInDown">
              Your Information:
            </h4>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={27}
              data-mobile={27}
              data-smobile={27}
            />
            <div className="form-your-info">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row-info wow fadeInDown">
                  <div className="col-info-6">
                    <input type="text" placeholder="Patient name" />
                    <span className="icon-form">
                      <i className="fas fa-user-edit" />
                    </span>
                  </div>
                  <div className="col-info-6">
                    <input type="text" placeholder="Email" />
                    <span className="icon-form">
                      <i className="fas fa-at" />
                    </span>
                  </div>
                </div>
                <div className="row-info wow fadeInDown">
                  <div className="col-info-6 focus-date">
                    <input type="text" placeholder="Date of Birth" />
                    <span className="icon-form">
                      <i className="far fa-calendar-alt" />
                    </span>
                  </div>
                  <div className="col-info-6">
                    <input type="text" placeholder="Mobile Number" />
                    <span className="icon-form">
                      <i className="fas fa-phone-alt" />
                    </span>
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={15}
                  data-mobile={15}
                  data-smobile={15}
                />
                <div className="row-info wow fadeInDown">
                  <div className="col-info-12">
                    <div className="box-gender">
                      <div className="title-gender">Gender :</div>
                      <div className="list-gender">
                        &nbsp;
                        <div className="option-gender">
                          <input
                            type="radio"
                            name="gender"
                            defaultValue={1}
                            defaultChecked="checked"
                          />
                          <span className="check-custom" />
                          &nbsp;
                          <label className="text-color-title-sidebar">
                            Male
                          </label>
                        </div>
                        &nbsp;
                        <div className="option-gender">
                          <input type="radio" name="gender" defaultValue={2} />
                          <span className="check-custom" />
                          &nbsp;
                          <label className="text-color-title-sidebar">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={35}
                  data-mobile={35}
                  data-smobile={35}
                />
                <div className="row-info wow fadeInDown">
                  <div className="col-info-12 icon-down">
                    <span className="icon-form">
                      <i className="fas fa-chevron-down" />
                    </span>
                    <select name="hospital">
                      <option value={1}>Select Hospital</option>
                      <option value={2}>Select Hospital</option>
                      <option value={3}>Select Hospital</option>
                    </select>
                  </div>
                </div>
                <div className="row-info wow fadeInDown">
                  <div className="col-info-12 icon-down">
                    <span className="icon-form">
                      <i className="fas fa-chevron-down" />
                    </span>
                    <select name="service">
                      <option value={1}>Select Service</option>
                      <option value={2}>Select Service</option>
                      <option value={3}>Select Service</option>
                    </select>
                  </div>
                </div>
                <div className="row-info wow fadeInDown">
                  <div className="col-info-12 focus-date">
                    <span className="icon-form">
                      <i className="far fa-calendar-alt" />
                    </span>
                    <input type="text" placeholder="Select Date" />
                  </div>
                </div>
                <div className="row-info wow fadeInDown">
                  <div className="col-info-12">
                    <span className="icon-form">
                      <i className="fas fa-user" />
                    </span>
                    <select name="doctor">
                      <option value={1}>Select Doctor</option>
                      <option value={2}>Select Doctor</option>
                      <option value={3}>Select Doctor</option>
                    </select>
                  </div>
                </div>
                <div className="row-info wow fadeInDown">
                  <div className="col-info-12">
                    <span className="icon-form">
                      <i className="far fa-clipboard" />
                    </span>
                    <textarea
                      className="form-control"
                      placeholder="Note to the doctor (optional)"
                      maxLength={1000}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </form>
            </div>
            {/*/form-your-info*/}
            <div
              className="themesflat-spacer clearfix"
              data-desktop={19}
              data-mobile={19}
              data-smobile={19}
            />
            <h4 className="text-color-title-sidebar">Payment Information:</h4>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={19}
              data-mobile={19}
              data-smobile={19}
            />
            <div className="form-payment-info">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row-info wow fadeInDown">
                  <div className="col-info-12">
                    <label>Name on card</label>
                    <input type="text" placeholder="Dorothy Schneider" />
                  </div>
                </div>
                <div className="row-info wow fadeInDown">
                  <div className="col-info-6">
                    <label>Card number</label>
                    <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />
                  </div>
                  <div className="col-info-6">
                    <ul className="list-payment">
                      <li>
                        <a href="#">
                          <i className="fab fa-cc-paypal" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-cc-visa" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-cc-mastercard" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-cc-amex" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={3}
                  data-mobile={3}
                  data-smobile={3}
                />
                <div className="row-info wow fadeInDown">
                  <div className="col-info-6">
                    <label>Expiration date</label>
                    <input type="date" />
                  </div>
                  <div className="col-info-6">
                    <label> Security code </label>
                    <input type="text" placeholder="CCV" />
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={3}
                  data-mobile={3}
                  data-smobile={3}
                />
                <div className="row-info wow fadeInDown">
                  <div className="col-info-12">
                    <div className="check-form-payment">
                      <input type="checkbox" />
                      <label>
                        I accept terms and conditions and general policy
                      </label>
                    </div>
                  </div>
                </div>
              </form>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={55}
                data-mobile={55}
                data-smobile={55}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={0}
            data-mobile={70}
            data-smobile={70}
          />
          <div className="booking-summary">
            <div className="title-booking wow fadeInDown">
              <h4 className="text-color-white">Booking Summary</h4>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={30}
              data-mobile={30}
              data-smobile={30}
            />
            <ul className="list-summary wow fadeInDown">
              <li>
                <ul className="date">
                  <li>Date</li>
                  <li className="w-right">07/10/2020</li>
                </ul>
              </li>
              <li>
                <ul className="hours">
                  <li>Time09:30AM</li>
                  <li className="w-right">08:30 PM</li>
                </ul>
              </li>
              <li>
                <ul className="name-doctor">
                  <li>Doctor name</li>
                  <li className="w-right">Dr. Beatrice Willis</li>
                </ul>
              </li>
            </ul>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={21}
              data-mobile={21}
              data-smobile={21}
            />
            <ul className="list-price wow fadeInDown">
              <li>
                <ul className="price">
                  <li>Sit etiam convallis</li>
                  <li className="w-right">$80</li>
                </ul>
              </li>
              <li>
                <ul className="price">
                  <li>Curabitur praesent sed</li>
                  <li className="w-right">$140</li>
                </ul>
              </li>
            </ul>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={20}
              data-mobile={20}
              data-smobile={20}
            />
            <ul className="total wow fadeInDown">
              <li>
                <ul className="total font-bold">
                  <li>Total</li>
                  <li className="w-right">$220</li>
                </ul>
              </li>
            </ul>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={14}
              data-mobile={14}
              data-smobile={14}
            />
            <div className="box-btn wow fadeInDown">
              <a href="#" className="themesflat-button bg-accent btn-booking">
                <span>
                  Confirm and Pay
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </a>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={20}
              data-mobile={20}
              data-smobile={20}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={254}
          data-mobile={200}
          data-smobile={100}
        />
      </div>
    </div>
  );
}
