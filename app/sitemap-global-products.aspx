<%@ Page Language="C#" AutoEventWireup="true" CodeFile="sitemap-global-products.aspx.cs" Inherits="sitemap_global_products" %>

<%@ Register Src="~/uc/head.ascx" TagPrefix="uc1" TagName="head" %>
<%@ Register Src="~/uc/header.ascx" TagPrefix="uc1" TagName="header" %>
<%@ Register Src="~/uc/footer.ascx" TagPrefix="uc1" TagName="footer" %>
<%@ Register Src="~/uc/search.ascx" TagPrefix="uc1" TagName="search" %>
<!DOCTYPE html>
<html lang="en">

<head runat="server">
    <uc1:head runat="server" ID="head" />
    <style>
                       
                        </style>
</head>

<body>
    <form runat="server" id="form1">
        <!-- start page-wrapper -->
        <div class="page-wrapper">
            
            <section class="about_sections">
                <div class="container-fluid">
                    <div class="row">
                        <div class="about_heading">
                            <h1 id="div_title" class="hsn_h1" runat="server">Exim Trade Search Data</h1>
                        </div>
                        <p class="text-center" id="div_sub_title" runat="server"></p>
                    </div>
                </div>
            </section>
            <section class="section_abouts search-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="search-data">
                                <div class="search-form-block position-relative">
                                    <div class="row" style="min-height: 600px !important;">
                                        <div class="col-md-2 col-sm-6">
                                            <div class="form-group-lg fg-1">
                                                <asp:DropDownList ID="ddlalphabet" runat="server" CssClass="form-control">
                                                    <asp:ListItem Text="A" Value="A"></asp:ListItem>
                                                    <asp:ListItem Text="B" Value="B"></asp:ListItem>
                                                    <asp:ListItem Text="C" Value="C"></asp:ListItem>
                                                    <asp:ListItem Text="D" Value="D"></asp:ListItem>
                                                    <asp:ListItem Text="E" Value="E"></asp:ListItem>
                                                    <asp:ListItem Text="F" Value="F"></asp:ListItem>
                                                    <asp:ListItem Text="G" Value="G"></asp:ListItem>
                                                    <asp:ListItem Text="H" Value="H"></asp:ListItem>
                                                    <asp:ListItem Text="I" Value="I"></asp:ListItem>
                                                    <asp:ListItem Text="J" Value="J"></asp:ListItem>
                                                    <asp:ListItem Text="K" Value="K"></asp:ListItem>
                                                    <asp:ListItem Text="L" Value="L"></asp:ListItem>
                                                    <asp:ListItem Text="M" Value="M"></asp:ListItem>
                                                    <asp:ListItem Text="N" Value="N"></asp:ListItem>
                                                    <asp:ListItem Text="O" Value="O"></asp:ListItem>
                                                    <asp:ListItem Text="P" Value="P"></asp:ListItem>
                                                    <asp:ListItem Text="Q" Value="Q"></asp:ListItem>
                                                    <asp:ListItem Text="R" Value="R"></asp:ListItem>
                                                    <asp:ListItem Text="S" Value="S"></asp:ListItem>
                                                    <asp:ListItem Text="T" Value="T"></asp:ListItem>
                                                    <asp:ListItem Text="U" Value="U"></asp:ListItem>
                                                    <asp:ListItem Text="V" Value="V"></asp:ListItem>
                                                    <asp:ListItem Text="W" Value="W"></asp:ListItem>
                                                    <asp:ListItem Text="X" Value="X"></asp:ListItem>
                                                    <asp:ListItem Text="Y" Value="Y"></asp:ListItem>
                                                    <asp:ListItem Text="Z" Value="Z"></asp:ListItem>
                                                </asp:DropDownList>
                                            </div>
                                        </div>
                                        <div class="col-md-1 col-sm-6">
                                            <div class="form-group-lg fg-1">
                                                <asp:TextBox ID="txtfrom" runat="server" placeholder="Record From" Text="1" CssClass="form-control"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="col-md-1 col-sm-6">
                                            <div class="form-group-lg fg-1">
                                                <asp:TextBox ID="txtto" runat="server" placeholder="Record To" Text="100" CssClass="form-control"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">

                                            <div class="search-country col mx-0 px-0 ">
                                                <div class="row w-100 mx-0 px-0">
                                                    <div class="col-9 text-start">
                                                        <span class="countryName" runat="server" onchange="check();"
                                                            onkeyup="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();" id="ddlcountry">Select Country..</span>
                                                    </div>
                                                    <div class="col-3 open-search-box text-end">
                                                        <i class="fa fa-angle-down"></i>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="dec-main-div col-sm-3">
                                            <div class="form-group">
                                                <asp:DropDownList ID="ddltype" runat="server" CssClass="form-control dropss">
                                                    <asp:ListItem Value="import" Text="Import"></asp:ListItem>
                                                    <asp:ListItem Value="export" Text="Export"></asp:ListItem>
                                                </asp:DropDownList>
                                            </div>
                                        </div>

                                        <div class="col-md-2  col-sm-3">
                                            <asp:Button ID="btnsearch" runat="server" Class="new-pricing-btn btn btn-dark mt-0" Text="Search" OnClick="btnsearch_Click" />
                                        </div>

                                        <div class="col-md-2 col-sm-6">
                                            <div class="form-group-lg fg-1">
                                                <asp:TextBox ID="txttotal" runat="server" CssClass="form-control dropss">
                                                </asp:TextBox>
                                            </div>
                                        </div>

                                        <div class="col-12 search-fliter-row search-fliter-homepage-row ">
                                            <div class="row ">
                                                <div class="col-12  search-related-filter bg-light py-1 position-relative " style="z-index: 1;">
                                                    <div class="d-flex">
                                                        <div class="input-group bg-light">
                                                            <div class="input-group-text"><i class="fa fa-search" style="color: #898989"></i></div>
                                                            <input placeholder="Search countries" id="myCountry" onkeyup="myCountryfn()" type="search" class="inner-dropdown-search change-line-height form-control" value="">
                                                        </div>


                                                    </div>

                                                </div>
                                                <div class="col country-filter-dropdown">
                                                    <asp:HiddenField ID="hid_country" runat="server" Value="India" />
                                                    <ul id="country" class="country" name="country">
                                                        <li id="India" style="" onclick="GetddlData('India');"><a>
                                                            <img src="<%= common.root %>flags/in.svg">India</a></li>
                                                        <li id="Bangladesh" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Bangladesh</a></li>
                                                        <li id="Brazil" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/br.svg">Brazil</a></li>
                                                        <li id="Indonesia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/id.svg">Indonesia</a></li>
                                                        <li id="Mexico" style="display: none;" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/MX.svg">Mexico</a></li>
                                                        <li id="Pakistan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/pk.svg">Pakistan</a></li>
                                                        <li id="Philippines" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/ph.svg">Philippines</a></li>
                                                        <li id="Russia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/ru.svg">Russia</a></li>
                                                        <li id="sri_lanka" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/lk.svg">Sri Lanka</a></li>
                                                        <li id="Tanzania" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/tz.svg">Tanzania</a></li>
                                                        <li id="Turkey" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/TR.svg">Turkey</a></li>
                                                        <li id="Vietnam" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/VN.svg">Vietnam</a></li>
                                                        <li id="Argentina" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/ar.svg">Argentina</a></li>
                                                        <li id="Bolivia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bo.svg">Bolivia</a></li>
                                                        <li id="Botswana" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bw.svg">Botswana</a></li>
                                                        <li id="Chile" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/cl.svg">Chile</a></li>
                                                        <li id="Nigeria" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/ng.svg">Nigeria</a></li>
                                                        <li id="Colombia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/co.svg">Colombia</a></li>
                                                        <li id="costarica" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/cr.svg">CostaRica</a></li>
                                                        <li id="drcongo" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/cd.svg">DR Congo</a></li>
                                                        <li id="Kazakhstan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/kz.svg">Kazakhstan</a></li>
                                                        <li id="Kenya" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/ke.svg">Kenya</a></li>
                                                        <li id="Moldova" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/md.svg">Moldova</a></li>
                                                        <li id="Uganda" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/UG.svg">Uganda</a></li>
                                                        <li id="Ukraine" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/UA.svg">Ukraine</a></li>
                                                        <li id="Uzbekistan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/UZ.svg">Uzbekistan</a></li>
                                                        <li id="australia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/au.svg">Australia</a></li>
                                                        <li id="Spain" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/es.svg">Spain</a></li>
                                                        <li id="united_kingdom" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/GB.svg">United Kingdom</a></li>
                                                        <li id="Netherland" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/nl.svg">Netherland</a></li>
                                                        <li id="Germany" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/de.svg">Germany</a></li>
                                                        <li id="united_arab_emirates" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/AE.svg">United Arab Emirates</a></li>
                                                        <li id="saudi_arabia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/sa.svg">Saudi Arabia</a></li>
                                                        <li id="Oman" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/om.svg">Oman</a></li>
                                                        <li id="Singapore" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/sg.svg">Singapore</a></li>
                                                        <li id="canada" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/ca.svg">Canada</a></li>
                                                        <li id="China" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/cn.svg">China</a></li>
                                                        <li id="USA" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/US.svg">USA</a></li>
                                                        <li id="Afghanistan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/in.svg">Afghanistan</a></li>
                                                        <li id="Algeria" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Algeria</a></li>
                                                        <li id="Angola" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Angola</a></li>
                                                        <li id="Armenia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Armenia</a></li>
                                                        <li id="Austria" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Austria</a></li>
                                                        <li id="Azerbaijan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Azerbaijan</a></li>
                                                        <li id="Bahrain" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Bahrain</a></li>
                                                        <li id="Barbados" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Barbados</a></li>
                                                        <li id="Belgium" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Belgium</a></li>
                                                        <li id="Belarus" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Belarus</a></li>
                                                        <li id="Benin" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Benin</a></li>
                                                        <li id="Bermuda" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Bermuda</a></li>
                                                        <li id="Bhutan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Bhutan</a></li>
                                                        <li id="Bulgaria" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Bulgaria</a></li>
                                                        <li id="Burundi" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Burundi</a></li>
                                                        <li id="Cambodia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Cambodia</a></li>
                                                        <li id="Cameroon" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Cameroon</a></li>
                                                        <li id="Chad" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Chad</a></li>
                                                        <li id="Cote_d_ivoire" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Cote d ivoire</a></li>
                                                        <li id="Croatia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Croatia</a></li>
                                                        <li id="Cyprus" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Cyprus</a></li>
                                                        <li id="Czech_Republic" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Czech Republic</a></li>
                                                        <li id="Denmark" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Denmark</a></li>
                                                        <li id="Dominican_Republic" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Dominican Republic</a></li>
                                                        <li id="Ecuador" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Ecuador</a></li>
                                                        <li id="Egypt" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Egypt</a></li>
                                                        <li id="Estonia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Estonia</a></li>
                                                        <li id="Ethiopia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Ethiopia</a></li>
                                                        <li id="El_Salvador" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">El Salvador</a></li>
                                                        <li id="Fiji" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Fiji</a></li>
                                                        <li id="Finland" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Finland</a></li>
                                                        <li id="France" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">France</a></li>
                                                        <li id="Gabon" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Gabon</a></li>
                                                        <li id="Georgia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Georgia</a></li>
                                                        <li id="Ghana" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Ghana</a></li>
                                                        <li id="Greece" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Greece</a></li>
                                                        <li id="Guatemala" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Guatemala</a></li>
                                                        <li id="Guinea" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Guinea</a></li>
                                                        <li id="Guyana" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Guyana</a></li>
                                                        <li id="Hungary" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Hungary</a></li>
                                                        <li id="Honduras" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Honduras</a></li>
                                                        <li id="Iran" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Iran</a></li>
                                                        <li id="Iraq" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Iraq</a></li>
                                                        <li id="Ireland" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Ireland</a></li>
                                                        <li id="Israel" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Israel</a></li>
                                                        <li id="Italy" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Italy</a></li>
                                                        <li id="Jamaica" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Jamaica</a></li>
                                                        <li id="Japan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Japan</a></li>
                                                        <li id="Jordan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Jordan</a></li>
                                                        <li id="Kosovo" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Kosovo</a></li>
                                                        <li id="Kuwait" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Kuwait</a></li>
                                                        <li id="Kyrgyzstan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Kyrgyzstan</a></li>
                                                        <li id="Latvia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Latvia</a></li>
                                                        <li id="Lesotho" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Lesotho</a></li>
                                                        <li id="Liberia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Liberia</a></li>
                                                        <li id="Libya" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Libya</a></li>
                                                        <li id="Lithuania" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Lithuania</a></li>
                                                        <li id="Luxembourg" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Luxembourg</a></li>
                                                        <li id="Malawi" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Malawi</a></li>
                                                        <li id="Malaysia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Malaysia</a></li>
                                                        <li id="Maldives" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Maldives</a></li>
                                                        <li id="Mauritius" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Mauritius</a></li>
                                                        <li id="Morocco" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Morocco</a></li>
                                                        <li id="Mozambique" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Mozambique</a></li>
                                                        <li id="Nepal" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Nepal</a></li>
                                                        <li id="New_Zealand" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">New Zealand</a></li>
                                                        <li id="Nicaragua" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Nicaragua</a></li>
                                                        <li id="Niger" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Niger</a></li>
                                                        <li id="Norway" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Norway</a></li>
                                                        <li id="Namibia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Namibia</a></li>
                                                        <li id="Palestine" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Palestine</a></li>
                                                        <li id="Panama" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Panama</a></li>
                                                        <li id="Papua_New_Guinea" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Papua New Guinea</a></li>
                                                        <li id="Paraguay" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Paraguay</a></li>
                                                        <li id="Peru" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Peru</a></li>
                                                        <li id="Poland" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Poland</a></li>
                                                        <li id="Portugal" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Portugal</a></li>
                                                        <li id="Qatar" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Qatar</a></li>
                                                        <li id="Romania" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Romania</a></li>
                                                        <li id="Rwanda" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Rwanda</a></li>
                                                        <li id="Sao_Tome_and_Principe" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Sao Tome And Principe</a></li>
                                                        <li id="Senegal" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Senegal</a></li>
                                                        <li id="Serbia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Serbia</a></li>
                                                        <li id="Seychelles" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Seychelles</a></li>
                                                        <li id="Sierra_Leone" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Sierra Leone</a></li>
                                                        <li id="Slovakia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Slovakia</a></li>
                                                        <li id="Slovenia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Slovenia</a></li>
                                                        <li id="Somalia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Somalia</a></li>
                                                        <li id="South_Africa" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">South Africa</a></li>
                                                        <li id="South_Korea" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">South Korea</a></li>
                                                        <li id="Sudan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Sudan</a></li>
                                                        <li id="Sweden" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Sweden</a></li>
                                                        <li id="Switzerland" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Switzerland</a></li>
                                                        <li id="Syria" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Syria</a></li>
                                                        <li id="Taiwan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Taiwan</a></li>
                                                        <li id="Tajikistan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Tajikistan</a></li>
                                                        <li id="Thailand" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Thailand</a></li>
                                                        <li id="Togo" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Togo</a></li>
                                                        <li id="Trinidad_and_Tobago" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Trinidad And Tobago</a></li>
                                                        <li id="Tunisia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Tunisia</a></li>
                                                        <li id="Turkmenistan" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Turkmenistan</a></li>
                                                        <li id="Uruguay" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Uruguay</a></li>
                                                        <li id="Venezuela" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Venezuela</a></li>
                                                        <li id="Yemen" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Yemen</a></li>
                                                        <li id="Zambia" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Zambia</a></li>
                                                        <li id="Zimbabwe" style="" onclick="GetddlData(this.id);"><a>
                                                            <img src="<%= common.root %>flags/bd.svg">Zimbabwe</a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <br>

                        <script type="text/javascript">
                            $(document).ready(function () {
                                $("#country li").click(function () {
                                    var countryList = (this.id);
                                    $(".countryName").html(countryList);
                                    $(".search-fliter-row").removeClass("d-block");
                                });

                                $(".search-country").click(function () {
                                    $(".search-fliter-row").toggleClass("d-block");
                                    // alert("hoo");
                                });


                                $(".edit-dropdown").click(function () {
                                    $(".edit-dropdown-body").toggleClass("show");
                                    $(".edit-dropdown").toggleClass("show");

                                });


                            });
                        </script>

                        <script type="text/javascript">
                            function myCountryfn() {

                                // Declare variables
                                var input, filter, ul, li, a, i, txtValue;
                                input = document.getElementById('myCountry');
                                filter = input.value.toUpperCase();
                                ul = document.getElementById("country");
                                li = ul.getElementsByTagName('li');

                                // Loop through all list items, and hide those who don't match the search query
                                for (i = 0; i < li.length; i++) {
                                    a = li[i].getElementsByTagName("a")[0];
                                    txtValue = a.textContent || a.innerText;
                                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                        li[i].style.display = "";
                                    } else {
                                        li[i].style.display = "none";
                                    }
                                }
                            }
                        </script>
                    </div>
                </div>
            </section>
        </div>


        <uc1:footer runat="server" ID="footer1" />
    </form>
    <!-- end site-footer -->
    <!-- end of page-wrapper -->
    <!-- All JavaScript files
    ================================================== -->
    <script src="https://eximtradedata.com/js/script.js"></script>
    <script>
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }

        function GetddlData(country) {
            //alert(country);
            document.getElementById("hid_country").value = country;
        }
    </script>
    <script>
        (function ($) {
            let $allPanels = $('.nested').hide();
            let $elements = $('.treeview-animated-element');
            $('.treeview-animated-items-header').click(function () {
                $this = $(this);
                $target = $this.siblings('.nested');
                $pointerPlus = $this.children('.fa-plus-circle');
                $pointerMinus = $this.children('.fa-minus-circle');
                $pointerPlus.removeClass('fa-plus-circle');
                $pointerPlus.addClass('fa-minus-circle');
                $pointerMinus.removeClass('fa-minus-circle');
                $pointerMinus.addClass('fa-plus-circle');
                $this.toggleClass('open')
                if (!$target.hasClass('active')) {
                    $target.addClass('active').slideDown();
                } else {
                    $target.removeClass('active').slideUp();
                }
                return false;
            });
            $elements.click(function () {
                $this = $(this);
                if ($this.hasClass('opened')) {
                    $elements.removeClass('opened');
                } else {
                    $elements.removeClass('opened');
                    $this.addClass('opened');
                }
            })
        })(jQuery);
    </script>

</body>

</html>
