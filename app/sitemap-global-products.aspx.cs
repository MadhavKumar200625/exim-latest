using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Runtime.Remoting.Contexts;
using System.Security.Policy;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

public partial class sitemap_global_products : System.Web.UI.Page
{
    public CommonFunctions common = new CommonFunctions();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {

        }
    }

    protected void btnsearch_Click(object sender, EventArgs e)
    {
        SqlConnection con = new SqlConnection(common.conStr);
        try
        {
            var items = new List<string>();

            string country = hid_country.Value.Trim();
            string alphabet = ddlalphabet.SelectedValue.Trim();
            string from = txtfrom.Text.Trim();
            string to = txtto.Text.Trim();
            string type = ddltype.SelectedValue.Trim();

            string[] country_all;
            string[] country_cus;
            string country_string = "afghanistan,algeria,angola,argentina,armenia,australia,austria,azerbaijan,bahrain,bangladesh,barbados,belarus,belgium,benin,bermuda,bhutan,bolivia,botswana,brazil,bulgaria,burundi,cambodia,cameroon,canada,chad,chile,china,colombia,costa_rica,cote_d_ivoire,croatia,cyprus,czech_republic,denmark,dominican_republic,dr_congo,ecuador,egypt,estonia,ethiopia,fiji,finland,france,gabon,georgia,germany,ghana,greece,guatemala,guinea,guyana,hungary,india,indonesia,iran,iraq,ireland,israel,italy,jamaica,japan,jordan,kazakhstan,kenya,kosovo,kuwait,kyrgyzstan,latvia,lesotho,liberia,libya,lithuania,luxembourg,malawi,malaysia,maldives,mauritius,mexico,moldova,morocco,mozambique,nepal,netherland,new_zealand,nicaragua,niger,nigeria,norway,oman,pakistan,palestine,panama,papua_new_guinea,paraguay,peru,philippines,poland,portugal,qatar,romania,russia,rwanda,sao_tome_and_principe,saudi_arabia,senegal,serbia,seychelles,sierra_leone,singapore,slovakia,slovenia,somalia,south_africa,south_korea,spain,sri_lanka,sudan,sweden,switzerland,syria,taiwan,tajikistan,tanzania,thailand,togo,trinidad_and_tobago,tunisia,turkey,turkmenistan,uganda,ukraine,united_arab_emirates,united_kingdom,uruguay,usa,uzbekistan,venezuela,vietnam,yemen,zambia,zimbabwe";

            string country_customs = "argentina,bangladesh,bolivia,botswana,burundi,cameroon,chile,colombia,costa_rica,cote_d_ivoire,dr_congo,ecuador,ethiopia,fiji,ghana,guatemala,guyana,india,indonesia,kazakhstan,kenya,kosovo,lesotho,liberia,malawi,mexico,moldova,nicaragua,nigeria,pakistan,panama,paraguay,peru,philippines,russia,rwanda,sao_tome_and_principe,sierra_leone,singapore,sri_lanka,tanzania,turkey,uganda,ukraine,uruguay,uzbekistan,venezuela,vietnam,zambia,zimbabwe";
            //string country_customs = "bangladesh,bolivia,colombia,costa_rica,cote_d_ivoire,dr_congo,ecuador,ethiopia,fiji,india";//,ghana,guatemala,guyana,indonesia,kazakhstan,kenya,kosovo,lesotho,liberia,malawi,mexico,moldova,nicaragua,nigeria,pakistan,panama,paraguay,peru,philippines,russia,rwanda,sao_tome_and_principe,sierra_leone,singapore,sri_lanka,tanzania,turkey,uganda,ukraine,uruguay,Uzbekistan,venezuela,vietnam,zambia,zimbabwe";
            country_all = country_string.Split(',');
            country_cus = country_customs.Split(',');
            //if (srccountry.ToLower() == "india" || srccountry.ToLower() == "bangladesh" || srccountry.ToLower() == "vietnam" || srccountry.ToLower() == "turkey" || srccountry.ToLower() == "tanzania" || srccountry.ToLower() == "argentina" || srccountry.ToLower() == "bolivia" || srccountry.ToLower() == "botswana" || srccountry.ToLower() == "burundi" || srccountry.ToLower() == "sri_lanka" || srccountry.ToLower() == "indonesia" || srccountry.ToLower() == "pakistan" || srccountry.ToLower() == "philipines" || srccountry.ToLower() == "russia" && srccountry.ToLower() == "argentina")
            int index = Array.IndexOf(country_all, country.ToLower());
            int index2 = Array.IndexOf(country_cus, country.ToLower());
            string country_sourcr = "";
            //if (index != -1)
            //{
            country_sourcr = "all";
            if (index2 != -1)
            {
                country_sourcr = country.ToLower();
            }
            else
            {
                country_sourcr = "all";
            }

            string url1 = "https://eximtradedata.com/search/country-"+ country_sourcr.Replace("_", "-") + "/type-import/product-";
            string tbl = country.Replace("-", "_") + "_" + type + "_on";




            string str1url = string.Format("http://103.30.72.94:8001/countriesProductList");
            //WebRequest requestobjpost = WebRequest.Create(str1url);
            //requestobjpost.Headers.Add("Authorization", "Basic YWJjOmFiY0AxMjM=");
            //requestobjpost.Method = "post";
            //requestobjpost.ContentType = "application/json";
            //string ApiUrl = "";
            //ApiUrl = "{\"source\":\"countries_product\",\"type\":\"list\",\"size\":" + to + ",\"filters\":\"" + alphabet + "\",\"columns\":\"" + tbl.ToLower() + "\"}";
            //using (var streamwriter = new StreamWriter(requestobjpost.GetRequestStream()))
            //{
            //    streamwriter.Write(ApiUrl);
            //    streamwriter.Flush();
            //    streamwriter.Close();

            //    //DataTable dt3 = new DataTable();
            //    var httpResponse = (HttpWebResponse)requestobjpost.GetResponse();

            //    using (var streamreader = new StreamReader(httpResponse.GetResponseStream()))
            //    {
            //        string str = streamreader.ReadToEnd().ToString();
            //        dynamic json = JsonConvert.DeserializeObject(str);
            //        var table = json["data"];
            //        var total_val = json["total_values"];
            //        //repdetails.datasource = table;
            //        //repdetails.DataBind();
            //        foreach (var item in table)
            //        {
            //            txttotal.Text = total_val;
            //            var aa = item["product"];
            //            //foreach (var aa2 in aa)
            //            //{
            //                //url1 = common.root + "search/country-" + country.Replace("_", "-") + "/type-" + type + "/product-" + item["product"].ToString().ToLower().Replace(" ", "-");
            //                //items.Add(url1);


            //            //}

            //        }
            //    }
            //}

            string[] alpha;
            string alpha_all = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
            alpha = alpha_all.Split(',');

            int tot;
            //foreach (var a in alpha)
            //{
                gettotal(alphabet, tbl, to);
                tot = int.Parse(txttotal.Text.Trim());
                for (int i = 100; i < 8500; i = i + 100)
                {
                    WebRequest requestobjpost1 = WebRequest.Create(str1url);
                    requestobjpost1.Headers.Add("Authorization", "Basic YWJjOmFiY0AxMjM=");
                    requestobjpost1.Method = "post";
                    requestobjpost1.ContentType = "application/json";
                    string ApiUrl1 = "";
                    ApiUrl1 = "{\"source\":\"countries_product\",\"type\":\"list\",\"size\":" + i + ",\"filters\":\"" + alphabet + "\",\"columns\":\"" + tbl.ToLower() + "\"}";
                    using (var streamwriter = new StreamWriter(requestobjpost1.GetRequestStream()))
                    {
                        streamwriter.Write(ApiUrl1);
                        streamwriter.Flush();
                        streamwriter.Close();

                        //DataTable dt3 = new DataTable();
                        var httpResponse = (HttpWebResponse)requestobjpost1.GetResponse();

                        using (var streamreader = new StreamReader(httpResponse.GetResponseStream()))
                        {
                            string str = streamreader.ReadToEnd().ToString();
                            dynamic json = JsonConvert.DeserializeObject(str);
                            var table = json["data"];
                            var total_val = json["total_values"];
                            //repdetails.datasource = table;
                            //repdetails.DataBind();
                            foreach (var item in table)
                            {
                                txttotal.Text = total_val;
                                var aa = item["product"];
                                //foreach (var aa2 in aa)
                                //{
                                url1 = common.root + "search/country-" + country.Replace("_", "-") + "/type-" + type + "/product-" + item["product"].ToString().ToLower().Replace(" ", "-");
                                items.Add(url1);


                                //}

                            }
                        }
                    }
                }
            //}


            string path = Server.MapPath("~/sitemaps-products/sitemap-" + country + "-" + type + "-" + alphabet + ".xml");
            using (XmlWriter writer = XmlWriter.Create(path, new XmlWriterSettings { Indent = true }))
            {
                writer.WriteStartDocument();
                writer.WriteStartElement("urlset", "http://www.sitemaps.org/schemas/sitemap/0.9");

                foreach (var url in items)
                {
                    writer.WriteStartElement("url");
                    writer.WriteElementString("loc", url);
                    writer.WriteElementString("lastmod", DateTime.UtcNow.ToString("yyyy-MM-dd"));
                    writer.WriteEndElement();
                }

                writer.WriteEndElement();
                writer.WriteEndDocument();
            }

            //
            con.Open();
            SqlCommand cmd = new SqlCommand("insert into sitemap_url(category, url) values('Product', '" + path + "')", con);
            int cmd_i = cmd.ExecuteNonQuery();

            Response.Write("Sitemap generated successfully.");
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
            if (con != null) con.Close();
        }

    }

    private void gettotal(string alphabet, string tbl, string to)
    {
        string str1url = string.Format("http://103.30.72.94:8001/countriesProductList");
        WebRequest requestobjpost = WebRequest.Create(str1url);
        requestobjpost.Headers.Add("Authorization", "Basic YWJjOmFiY0AxMjM=");
        requestobjpost.Method = "post";
        requestobjpost.ContentType = "application/json";
        string ApiUrl = "";
        ApiUrl = "{\"source\":\"countries_product\",\"type\":\"list\",\"size\":" + to + ",\"filters\":\"" + alphabet + "\",\"columns\":\"" + tbl.ToLower() + "\"}";
        using (var streamwriter = new StreamWriter(requestobjpost.GetRequestStream()))
        {
            streamwriter.Write(ApiUrl);
            streamwriter.Flush();
            streamwriter.Close();

            var httpResponse = (HttpWebResponse)requestobjpost.GetResponse();
            using (var streamreader = new StreamReader(httpResponse.GetResponseStream()))
            {
                string str = streamreader.ReadToEnd().ToString();
                dynamic json = JsonConvert.DeserializeObject(str);
                var table = json["data"];
                var total_val = json["total_values"];
                
                    txttotal.Text = total_val;
                
            }
        }
    }
}