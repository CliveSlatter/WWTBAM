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
        JSONObject rewards = new JSONObject();
        JSONArray jsa = new JSONArray();
        try{
            PreparedStatement ps = Main.Main.db.prepareStatement("SELECT rewardID, rewardValue FROM rewards ORDER BY rewardID DESC");
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
                JSONObject jso = new JSONObject();
                jso.put("id",rs.getInt(1));
                jso.put("value",rs.getString(2));
                jsa.add(jso);
            }
            rewards.put("rewards", jsa);
            return rewards.toString();
        }catch(Exception e){
            return e.getMessage();
        }
    }

}
