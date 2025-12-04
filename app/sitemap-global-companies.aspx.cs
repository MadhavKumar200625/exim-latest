using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Xml;
using System.Text;
using System.Runtime.Remoting.Contexts;
using Newtonsoft.Json;
using System.IO;
using System.Net;

public partial class sitemap_global_companies : System.Web.UI.Page
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
        SqlConnection con = new SqlConnection(common.conStr_ms + "company_profile_database");
        try
        {
            var items = new List<string>();

            string country = hid_country.Value.Trim();
            string alphabet = ddlalphabet.SelectedValue.Trim();
            string from = txtfrom.Text.Trim();
            string to = txtto.Text.Trim();

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

            //
            int s = int.Parse(hid_max.Value);
            int end = int.Parse(txttotal.Text.Trim());
            //if (hid_max.Value == "")
            while (s <= end)
            {
                getdata(country, country_sourcr, alphabet, s);
                System.Threading.Thread.Sleep(5000);
                s = int.Parse(hid_max.Value);
                end = int.Parse(txttotal.Text.Trim());
            }
            //

            //string url1 = "";

            //string str1url = string.Format("http://103.30.72.94:8012/companyDistinctCount");
            //WebRequest requestobjpost = WebRequest.Create(str1url);
            //requestobjpost.Headers.Add("Authorization", "Basic YWJjOmFiY0AxMjM=");
            //requestobjpost.Method = "post";
            //requestobjpost.ContentType = "application/json";
            //string ApiUrl = "";
            //ApiUrl = "{\"source\":\"" + country_sourcr.ToLower() + "\",\"type\":\"master\",\"country_name\":\"" + country.Replace("_", " ") + "\",\"company_start_from\":\"" + alphabet + "\", \"from_\":" + from + ", \"to\":\"" + to + "\"}";
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
            //        //repdetails.datasource = table;
            //        //repdetails.DataBind();
            //        foreach (var item in table)
            //        {
            //            txttotal.Text = item["Total Count"].ToString().Trim();
            //            var aa = item["Company"];
            //            foreach (var aa2 in aa)
            //            {
            //                url1 = common.root + "global-companies/" + country.Replace("_", "-") + "/" + aa2["Name"].ToString().Trim().Replace(" ", "-").ToLower();
            //                items.Add(url1);

                           
            //            }

            //        }
            //    }
            //}

            //string path = Server.MapPath("~/sitemaps-new/sitemap-" + country + "-" + alphabet + "-" + from + ".xml");
            //using (XmlWriter writer = XmlWriter.Create(path, new XmlWriterSettings { Indent = true }))
            //{
            //    writer.WriteStartDocument();
            //    writer.WriteStartElement("urlset", "http://www.sitemaps.org/schemas/sitemap/0.9");

            //    foreach (var url in items)
            //    {
            //        writer.WriteStartElement("url");
            //        writer.WriteElementString("loc", url);
            //        writer.WriteElementString("lastmod", DateTime.UtcNow.ToString("yyyy-MM-dd"));
            //        writer.WriteEndElement();
            //    }

            //    writer.WriteEndElement();
            //    writer.WriteEndDocument();
            //}

            Response.Write("Sitemap generated successfully.");
        }
        catch (Exception ex)
        {

        }
        finally
        {
            if (con != null) con.Close();
        }

    }

    private void getdata(string country, string country_sourcr, string alphabet, int from)
    {
        try
        {
            var items = new List<string>();
            string url1 = "";
            string to = (from + 9000).ToString();
            string str1url = string.Format("http://103.30.72.94:8012/companyDistinctCount");
            WebRequest requestobjpost = WebRequest.Create(str1url);
            requestobjpost.Headers.Add("Authorization", "Basic YWJjOmFiY0AxMjM=");
            requestobjpost.Method = "post";
            requestobjpost.ContentType = "application/json";
            string ApiUrl = "";
            ApiUrl = "{\"source\":\"" + country_sourcr.ToLower() + "\",\"type\":\"master\",\"country_name\":\"" + country.Replace("_", " ") + "\",\"company_start_from\":\"" + alphabet + "\", \"from_\":" + from + ", \"to\":\"" + to + "\"}";
            using (var streamwriter = new StreamWriter(requestobjpost.GetRequestStream()))
            {
                streamwriter.Write(ApiUrl);
                streamwriter.Flush();
                streamwriter.Close();

                //DataTable dt3 = new DataTable();
                var httpResponse = (HttpWebResponse)requestobjpost.GetResponse();

                using (var streamreader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    string str = streamreader.ReadToEnd().ToString();
                    dynamic json = JsonConvert.DeserializeObject(str);
                    var table = json["data"];
                    //repdetails.datasource = table;
                    //repdetails.DataBind();
                    foreach (var item in table)
                    {
                        txttotal.Text = item["Total Count"].ToString().Trim();
                        hid_max.Value = to;
                        var aa = item["Company"];
                        foreach (var aa2 in aa)
                        {
                            url1 = common.root + "global-companies/" + country.Replace("_", "-") + "/" + aa2["Name"].ToString().Trim().Replace(" ", "-").ToLower();
                            items.Add(url1);


                        }

                    }
                }
            }

            string path = Server.MapPath("~/sitemaps-new/sitemap-" + country + "-" + alphabet + "-" + from + ".xml");
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
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }
}