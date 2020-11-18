package controllers;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Arrays;

@Path("rewards/")
public class Rewards {

    @Path("fetch")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public static String getRewards(){
        try{
            PreparedStatement ps = new PreparedStatement("") {
            }
        }catch(Exception e){
            return e.getMessage();
        }
    }

}
